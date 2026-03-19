# Deploying to GitHub Pages

## One-time setup

1. In your repo: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. Save. No need to create a `gh-pages` branch.

## Automatic deploys

Every push to `main` (or `master`) runs the workflow: it builds the app and deploys the `dist` folder to GitHub Pages. The site will be at:

**https://\<your-username\>.github.io/chess-frontend/**

## If your default branch is not `main` or `master`

Edit `.github/workflows/deploy-pages.yml` and change the `branches` list under `on.push` to match your default branch.
