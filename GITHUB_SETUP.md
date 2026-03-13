# GitHub Setup – INTERESTING AMERICA

## Repository erstellen auf GitHub

1. Gehe zu https://github.com/new
2. Repository-Name: `interesting-america-hp`
3. Sichtbarkeit: Private
4. **KEIN** README initialisieren (wir haben schon alles lokal)
5. "Create repository"

## SSH-Key hinzufügen (falls noch nicht in GitHub)

Dein SSH-Key: `~/.ssh/id_ed25519_openclaw.pub`

```bash
cat ~/.ssh/id_ed25519_openclaw.pub
```

Kopiere den Output und füge ihn hinzu unter:  
**GitHub → Settings → SSH and GPG keys → New SSH key**

## Remote hinzufügen und pushen

```bash
cd /Users/david2/.openclaw/workspace/interesting-america-hp

# GitHub als Remote hinzufügen
git remote add origin git@github.com:dein-username/interesting-america-hp.git

# Auf main branch wechseln (falls nötig)
git branch -M main

# Pushen
git push -u origin main
```

## Fertig!

Deine Website ist jetzt auf GitHub. Für Updates:

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

## Lokale Entwicklung

```bash
npm run serve    # Dev-Server starten (localhost:8080)
npm run build    # Produktions-Build
```

## Modularität – So bearbeitest du Content

Alle Seiten nutzen **Module** im Frontmatter. Beispiel aus `src/index.md`:

```yaml
modules:
  - type: hero           # Modul-Typ
    title: "..."         # Titel
    description: "..." # Text
    cta:                 # Button
      text: "Action"
      url: "/seite/"
```

**Verfügbare Module:**
- `hero` – Große Hero-Section mit Bild
- `text-block` – Text-Content mit optional CTA
- `features` – 4-spaltige Feature-Karten
- `services-list` – Service-Karten mit Bildern
- `cta-banner` – Call-to-Action Banner
- `contact-form` – Kontaktformular + Info

**Neue Seite erstellen:**
1. Kopiere `src/index.md` als Vorlage
2. Passe `title`, `modules` an
3. Speichere als `src/neue-seite.md`
4. Navigation in `src/_data/site.json` ergänzen

**Navigation bearbeiten:**
`src/_data/site.json` → `nav` Array anpassen

**Styles bearbeiten:**
`src/css/main.css` – CSS-Variablen oben für Farben/Fonts

**Layout bearbeiten:**
`src/_includes/layouts/base.njk` – HTML-Struktur

**Module bearbeiten:**
`src/_includes/modules/[modul-name].njk`
