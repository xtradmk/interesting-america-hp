# INTERESTING AMERICA

Professional hotel brokerage website for sports events in the USA.

## About

Part of the INTERESTING SPORTS group. Operating since 2010 with offices in Berlin and Los Angeles.

## Tech Stack

- **Static Site Generator:** 11ty (Eleventy)
- **Templating:** Nunjucks
- **Styling:** Vanilla CSS with CSS custom properties
- **Build:** Node.js/npm

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run serve

# Build for production
npm run build
```

## Structure

```
src/
├── _data/              # Global data (site.json)
├── _includes/
│   ├── layouts/        # Page layouts
│   ├── modules/        # Reusable content modules
│   ├── header.njk      # Site header
│   └── footer.njk      # Site footer
├── css/                # Stylesheets
├── js/                 # JavaScript
├── images/             # Static images
├── index.md            # Home page
├── about.md            # About page
├── services.md         # Services page
└── contact.md          # Contact page
```

## Content Editing

All pages use a **modular system**. Edit content in the frontmatter of each `.md` file:

```yaml
modules:
  - type: hero
    title: "Your Headline"
    description: "Your text"
```

Available modules: `hero`, `text-block`, `features`, `services-list`, `cta-banner`, `contact-form`

## License

Proprietary – INTERESTING AMERICA
