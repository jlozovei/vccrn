# vccrn - Vittude Code Challenge, React Native

The name speaks for itself. :bulb:

## About :scroll:
This repo contains the sources from Vittude's code challenge. The challenge consists on creating a we and mobile based app, using React and React Native (or Flutter).

### Directories :open_file_folder:
The code is organized using a monorepo structure, using the following directories:

- **apps** - where the web and mobile apps live
  - **apps/mobile** - the source for React Native app
  - **apps/web** - the source for React app (web)
- **packages** - useful code used within the apps
  - **packages/assets** - `.png` and `.svg` images
  - **packages/masks** - mask functions for inputs
  - **packages/strings** - strings used in both projects
  - **packages/tokens** - design tokens for colors, sizes and fonts
  - **packages/validators** - validation functions


## Stack :gem:
- :package: Package manager: npm
- :computer: Web app: React, Vite, Vitest, MSW, Axios, GitHub Pages
- :iphone: Mobile app: React Native, Expo, Jest, React Native Testing Library, Mirage, Axios
- :hammer_and_wrench: General configuration: Vitest, Turborepo
- :space_invader: CI/CD: GitHub Actions


## Useful Links :books:
- [GitHub Pages deployment](https://jlozovei.github.io/vccrn/)
- [Expo build - Android](https://expo.dev/accounts/jlozovei/projects/mobile/builds/5555a183-8394-4d64-b52d-92157f01a15d)
