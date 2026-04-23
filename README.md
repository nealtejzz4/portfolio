# Portfolio Project

This is a React portfolio website built to match the college assignment in `Protfolio_project.docx`.

## Features

- Home page with:
  - About Me
  - Research Interests
  - Personal Details
  - Profile picture placeholder
- Projects page with GitHub repository links
- Navigation using `NavLink`
- Routing using `HashRouter`
- GitHub Pages deployment scripts

## Edit Your Details

Update your content in:

- `src/data/profile.js`

You should replace:

- `Your Name`
- phone number
- personal and college email
- `photo` with an image path or URL if you want to show your real profile picture
- project titles and GitHub links

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a public GitHub repository named `portfolio`.
2. Update the `homepage` field in `package.json`:

```json
"homepage": "https://your-username.github.io/portfolio"
```

3. Push your code:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

4. Deploy:

```bash
npm run deploy
```

5. In GitHub repository settings, open `Pages` and select the `gh-pages` branch.

## Note

This project uses Vite, so the production output folder is `dist` instead of `build`.
