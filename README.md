# Vue Jukebox PoC - Architecture "Zero Build Future"

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)

*[🇫🇷 Lire la documentation en Français](./README.fr.md)*

This project is a proof of concept (PoC) aimed at producing a sustainable and standard Vue.js application.

The central objective is to generate a self-contained `dist/` folder: composed of standard ES modules (`.mjs`) and native CSS. This final folder must be able to work directly in a modern browser without a complex server, and remain maintainable (editable by hand) even if we decide one day to remove all the build tooling (`src` folder).

## 📂 Project structure

- `src/` : The developer workspace (Vue 3, TypeScript, Stylus).
- `dist/` : The finished product. It is the point of truth for production. It contains standardized code ready to be served by any static server.

## 🚀 Development workflows

This project supports three working methods according to your needs:

### 1. Rapid Development Mode (HMR)

To code quickly with instant update (Hot Module Replacement). Everything happens in RAM.

```bash
npm run vue-dev
# npx vite
```

- **URL** : http://localhost:5173
- **Note** : Does not update the `dist/` folder on disk.

### 2. "Production Watch" Mode (Hybrid)

This is the mode specific to this PoC. It allows you to work on the real version that will go to production, while having automatic compilation.

You need to launch two terminals:

**Terminal A (The builder)** : Compiles changes from `src` to `dist` in real time.

```bash
npm run vue-watch
# npx vite build --watch
```

**Terminal B (The server)** : Serves only the `dist/` folder (like a prod server).

```bash
npm run vue-check-prod
# npx serve ./dist/
```

- **URL** : http://localhost:3000
- **Advantage** : You test exactly what will be delivered (no dev server magic).

### 3. Final Build & Verification

To generate the final version, clean the code and verify type safety (TypeScript).

```bash
npm run vue-build
# vue-tsc --noEmit && vite build
```

This command executes sequentially:

1. `vue-tsc` : Verifies that there are no type errors in your code.
2. `vite build` : Generates the optimized files in `dist/`.

## 🛠️ "Zero Build Output" Philosophy

Unlike classic SPAs that generate a large unreadable "bundle", this project is configured to produce separate and intelligible files.

If tomorrow we remove the `src` folder and `node_modules`:

- The `dist/` folder continues to work alone.
- It is possible to edit `common.css` or the `.mjs` files directly with a standard text editor.
- The application remains natively compatible with modern browsers (ES Modules).
