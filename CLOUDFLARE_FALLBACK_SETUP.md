# Cloudflare Fallback (Production + CMS) for INTERESTING AMERICA

Use this only if GitHub PKCE login in `/admin` still fails.

## Goal
- Production hosting: Cloudflare Pages
- CMS login: GitHub OAuth via Cloudflare Worker (free tier)
- No Netlify credits needed

## 1) Create GitHub OAuth App
GitHub → Settings → Developer settings → OAuth Apps → New OAuth App

- Application name: `INTERESTING AMERICA CMS (CF)`
- Homepage URL: `https://interesting-america.pages.dev`
- Authorization callback URL: `https://ia-cms-oauth.<your-subdomain>.workers.dev/callback`

Save:
- Client ID
- Client Secret

## 2) Create Cloudflare Worker
Create a Worker named e.g. `ia-cms-oauth` and set env vars:
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `ALLOWED_ORIGIN` = `https://interesting-america.pages.dev`

Use this worker code:

```js
export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    if (url.pathname === '/auth') {
      const state = crypto.randomUUID();
      const origin = url.searchParams.get('origin') || env.ALLOWED_ORIGIN;
      const redirect = new URL('https://github.com/login/oauth/authorize');
      redirect.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      redirect.searchParams.set('redirect_uri', `${url.origin}/callback`);
      redirect.searchParams.set('scope', 'repo');
      redirect.searchParams.set('state', `${state}:${origin}`);
      return Response.redirect(redirect.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      const rawState = url.searchParams.get('state') || '';
      const [state, origin] = rawState.split(':');

      if (!code || !origin || origin !== env.ALLOWED_ORIGIN) {
        return new Response('Invalid OAuth callback', { status: 400 });
      }

      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const tokenJson = await tokenRes.json();
      if (!tokenJson.access_token) {
        return new Response(`OAuth token error: ${JSON.stringify(tokenJson)}`, { status: 400 });
      }

      const html = `<!doctype html><html><body><script>
        (function() {
          const authData = {
            token: '${tokenJson.access_token}',
            provider: 'github'
          };
          (window.opener || window.parent).postMessage(
            'authorization:github:success:' + JSON.stringify(authData),
            '${origin}'
          );
          window.close();
        })();
      </script>Login complete.</body></html>`;

      return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
    }

    return new Response('Not found', { status: 404 });
  },
};
```

## 3) Point Decap config to Worker
In `src/admin/config.yml`, set:

```yml
backend:
  name: github
  repo: xtradmk/interesting-america-hp
  branch: main
  base_url: https://ia-cms-oauth.<your-subdomain>.workers.dev
  auth_endpoint: auth
```

## 4) Deploy production on Cloudflare Pages
- Connect repo `xtradmk/interesting-america-hp`
- Build command: `npm run build`
- Output dir: `_site`

## 5) Test
- Open: `https://interesting-america.pages.dev/admin/`
- Login with GitHub
- Edit a page and publish

If this flow works, it fully replaces Netlify until your credits reset.
