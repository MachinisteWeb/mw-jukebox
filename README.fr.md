# Vue Jukebox PoC - Architecture "Zero Build Future"

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)

*[🇬🇧 Read this document in English](./README.md)*

Ce projet est une preuve de concept (PoC) visant à produire une application Vue.js pérenne et standard.

L'objectif central est de générer un dossier `dist/` autonome : composé de modules ES standards (`.mjs`) et de CSS natif. Ce dossier final doit pouvoir fonctionner directement dans un navigateur moderne sans serveur complexe, et rester maintenable (éditable à la main) même si l'on décide un jour de supprimer tout l'outillage de build (dossier `src`).

## 📂 Structure du projet

- `src/` : L'espace de travail développeur (Vue 3, TypeScript, Stylus).
- `dist/` : Le produit fini. C'est le point de vérité pour la production. Il contient du code standardisé prêt à être servi par n'importe quel serveur statique.

## 🚀 Workflows de développement

Ce projet supporte trois méthodes de travail selon tes besoins :

### 1. Mode Développement Rapide (HMR)

Pour coder vite avec mise à jour instantanée (Hot Module Replacement). Tout se passe en mémoire RAM.

```bash
npm run vue-dev
# npx vite
```

- **URL** : http://localhost:5173
- **Note** : Ne met pas à jour le dossier `dist/` sur le disque.

### 2. Mode "Production Watch" (Hybride)

C'est le mode spécifique à ce PoC. Il permet de travailler sur la version réelle qui partira en production, tout en ayant une compilation automatique.

Il faut lancer deux terminaux :

**Terminal A (Le constructeur)** : Compile les changements de `src` vers `dist` en temps réel.

```bash
npm run vue-watch
# npx vite build --watch
```

**Terminal B (Le serveur)** : Sert uniquement le dossier `dist/` (comme un serveur de prod).

```bash
npm run vue-check-prod
# npx serve ./dist/
```

- **URL** : http://localhost:3000
- **Avantage** : Tu testes exactement ce qui sera livré (pas de magie de dev server).

### 3. Build Final & Vérification

Pour générer la version finale, nettoyer le code et vérifier la sécurité des types (TypeScript).

```bash
npm run vue-build
# vue-tsc --noEmit && vite build
```

Cette commande exécute séquentiellement :

1. `vue-tsc` : Vérifie qu'il n'y a aucune erreur de type dans ton code.
2. `vite build` : Génère les fichiers optimisés dans `dist/`.

## 🛠️ Philosophie "Zero Build Output"

Contrairement aux SPA classiques qui génèrent un gros "bundle" illisible, ce projet est configuré pour produire des fichiers séparés et intelligibles.

Si demain nous supprimons le dossier `src` et `node_modules` :

- Le dossier `dist/` continue de fonctionner seul.
- Il est possible d'éditer `common.css` ou les fichiers `.mjs` directement avec un éditeur de texte standard.
- L'application reste compatible nativement avec les navigateurs modernes (ES Modules).
