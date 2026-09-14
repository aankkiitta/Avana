# Bazil — hero page (React)

Hero section only, matching the reference screenshot, fully responsive
(desktop → mobile), built with React + Vite. Same design as the plain
HTML version, now as reusable components.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
bazil-react/
├── index.html                 Vite HTML entry (fonts loaded here)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                React root
│   ├── App.jsx                 composes Layout + Hero
│   ├── styles/
│   │   └── index.css           global tokens (colors, fonts, reset)
│   ├── assets/
│   │   └── portrait-placeholder.svg   swap for the real photo
│   └── components/
│       ├── Header.jsx           the ONE header component, shared by every page
│       ├── Header.css
│       ├── Layout.jsx           wraps any page with <Header /> + <main>
│       ├── Hero.jsx             the hero section from the screenshot
│       └── Hero.css
```

## Reusable header — how to use it on new pages

`Header` is a self-contained component (logo, nav, mobile menu, language
switch, email button) with its own internal state — drop it anywhere:

```jsx
import Layout from './components/Layout.jsx'
import DesignPage from './components/DesignPage.jsx'

export default function App() {
  return (
    <Layout>
      <DesignPage />
    </Layout>
  )
}
```

Every page that goes through `Layout` gets the same header automatically.
Edit `Header.jsx` / `Header.css` once and it updates everywhere.

## Next steps (not built yet, on request)

- Swap `src/assets/portrait-placeholder.svg` for the real photo, update the
  `import` in `Hero.jsx`.
- Real client logo marks instead of text placeholders.
- Design / Photos / About page components + routing (e.g. react-router-dom).
