# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-02-20

### Added

- **React interface**: second UI identical to Vue, in `src/frameworks/web/react/`.
- React components (MyApp, MyButton) with Stylus, Vitest tests, Vite build.
- Dedicated npm scripts: `react-dev`, `react-build`, `react-prod`, `react-test`, `react-watch`.

### Changed

- **Dual-UI approach**: the project now builds two sites (Vue and React) to validate Clean Architecture.
- Having two interfaces helps identify what must stay in the CORE (domain, application, adapters) rather than be duplicated in each UI.
- Same implementation under two technologies to prove framework independence.
- README and README.fr updated to explain this approach.

---

## [0.1.0] - 2026-02-20

### Added

- Initial project structure with "Zero Build" architecture.
- Vite configuration for Library Mode (ESM output).
- TypeScript support with `vue-tsc` validation.
- Stylus setup for CSS pre-processing.
- **src/**: Developer workspace setup.
- **dist/**: Production-ready standalone output logic.
- Documentation (README in English and French).