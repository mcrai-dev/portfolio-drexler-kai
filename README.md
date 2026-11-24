# Portfolio Drexler Kai (FR / EN)

Site vitrine React + Vite, bilingue français / anglais, basé sur le portfolio PDF et le CV.

## Lancer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # site statique dans dist/
npm run preview
```

## Modifier le contenu

- Textes FR / EN, contacts, partenaires : `src/i18n.js`
- Photos : `public/photos/<categorie>/` (WebP), listées dans `src/data/photos.json`
  (`src`, `thumb` = version 900 px, `w`, `h`)
- Couleurs et polices : variables en haut de `src/index.css`

La langue se choisit avec le bouton FR / EN (mémorisée, et partageable via `?lang=en`).
Le formulaire de contact ouvre le client e-mail du visiteur (pas de serveur nécessaire).
