# Jukebox PoC - Clean Architecture avec Vue & React

![Version](https://img.shields.io/badge/version-0.3.0-blue.svg)

*[🇫🇷 Lire la documentation en Français](./README.fr.md)*

This project builds **two identical sites** : one with Vue, one with React. The goal is to validate a **Clean Architecture** approach.

## Why two UIs?

Having two UIs is the best way to :

1. **Identify what belongs in the CORE** — If a piece of code must be duplicated to support both Vue and React, it doesn't belong in the UI layer. It belongs in the core (domain, application, adapters). The dual-UI constraint forces a clear separation of concerns.

2. **Prove implementation parity** — The same features, the same behavior, under two different technologies. This validates that the architecture is framework-agnostic and that the business logic lives where it should.

## 📂 Project structure

- `src/frameworks/web/vue/` : Vue 3 interface (TypeScript, Stylus).
- `src/frameworks/web/react/` : React interface (TypeScript, Stylus).
- `src/` (core) : Domain, application logic, adapters — shared by both UIs.
- `dist/vue/` and `dist/react/` : Production builds for each interface.

## 📦 Installation

> **pnpm only** — This project uses `pnpm` exclusively (since v0.3.0). Do not use `npm` or `yarn`.

```bash
pnpm install
```

## 🚀 Development workflows

### Vue

```bash
pnpm run vue-dev      # Dev server (http://localhost:5173)
pnpm run vue-build    # Build → dist/vue/
pnpm run vue-prod     # Serve dist/vue/
pnpm run vue-test:run # Run tests
```

### React

```bash
pnpm run react-dev      # Dev server (http://localhost:5174)
pnpm run react-build    # Build → dist/react/
pnpm run react-prod     # Serve dist/react/
pnpm run react-test:run # Run tests
```

### Watch mode (both)

```bash
pnpm run vue-watch   # Build Vue on file change
pnpm run react-watch # Build React on file change
```

## 🛠️ Philosophy

The project aims to produce self-contained `dist/` folders with standard ES modules and CSS, usable in any modern browser without complex tooling. The dual-UI approach ensures that shared logic stays in the core and that both interfaces remain maintainable and aligned.
