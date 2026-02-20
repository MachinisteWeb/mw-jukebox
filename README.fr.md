# Jukebox PoC - Architecture Clean avec Vue & React

![Version](https://img.shields.io/badge/version-0.2.0-blue.svg)

*[🇬🇧 Read this document in English](./README.md)*

Ce projet construit **deux sites identiques** : l'un sous Vue, l'autre sous React. L'objectif est de valider une approche **Architecture Clean**.

## Pourquoi deux interfaces ?

Avoir deux UIs est le meilleur moyen de :

1. **Identifier ce qui doit être dans le CORE** — Si un morceau de code doit être dupliqué pour supporter Vue et React, il n'appartient pas à la couche UI. Il appartient au cœur (domain, application, adapters). La contrainte des deux interfaces impose une séparation claire des responsabilités.

2. **Prouver la parité d'implémentation** — Les mêmes fonctionnalités, le même comportement, sous deux technologies différentes. Cela valide que l'architecture est indépendante du framework et que la logique métier vit là où elle doit.

## 📂 Structure du projet

- `src/frameworks/web/vue/` : Interface Vue 3 (TypeScript, Stylus).
- `src/frameworks/web/react/` : Interface React (TypeScript, Stylus).
- `src/` (core) : Domain, logique applicative, adapters — partagés par les deux UIs.
- `dist/vue/` et `dist/react/` : Builds de production pour chaque interface.

## 🚀 Workflows de développement

### Vue

```bash
npm run vue-dev      # Serveur de dev (http://localhost:5173)
npm run vue-build    # Build → dist/vue/
npm run vue-prod     # Servir dist/vue/
npm run vue-test:run # Lancer les tests
```

### React

```bash
npm run react-dev      # Serveur de dev (http://localhost:5174)
npm run react-build    # Build → dist/react/
npm run react-prod     # Servir dist/react/
npm run react-test:run # Lancer les tests
```

### Mode watch (les deux)

```bash
npm run vue-watch   # Build Vue à chaque modification
npm run react-watch # Build React à chaque modification
```

## 🛠️ Philosophie

Le projet vise à produire des dossiers `dist/` autonomes avec des modules ES standards et du CSS, utilisables dans tout navigateur moderne sans outillage complexe. L'approche dual-UI garantit que la logique partagée reste dans le cœur et que les deux interfaces restent maintenables et alignées.
