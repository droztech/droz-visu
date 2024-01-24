<p align="center">
  <picture>
    <img alt="Visu" src="./public/visu.svg" height="48px" />
  </picture>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Visu is a component library and design system developed for Coaktion products. The library uses [Vite](https://vitejs.dev) for development and build, [React](https://react.dev) for components and [Tailwindcss](https://tailwindcss.com) for the design system.

## Installing

Install the library in a React project with the command

```bash
npm install @droz-js/visu
```

## Configuration

Visu is built using Tailwind CSS as a basis for styling components, making it work in different environments. Based on this, there are 2 ways to install Visu to your project:

### Project *WITH* Tailwindcss

To use in projects **WITH** Tailwindcss it is necessary to import the styling of `@droz-js/visu/dist/theme-plugin` as a **plugin** and `@droz-js/visu/dist/visu.es.js` needs to be added to **content** in your `tailwind.config.js` file.

```typescript
// tailwind.config.ts
import VisuTailwindcssPlugin from '@droz-js/visu/dist/theme-plugin'

export default {
  content: ['./node_modules/@droz-js/visu/dist/visu.es.js'],
  plugins: [VisuTailwindcssPlugin],
}

```

### Project *WITHOUT* Tailwindcss

To use in projects **WITHOUT** Tailwindcss, you need to import the styling from `@droz-js/visu/styles` into your global styles file.

```typescript
// global.css
import '@droz-js/visu/styles'
```

## Using

Once the library is configured, simply import a component and add it to the project.

```typescript
import { Component } from '@droz-js/visu'

function App() {
  return <Component>...</Component>
}

export default App
```

## License

[Copyright](../../LICENSE)
