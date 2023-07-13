<p align="center">
  <h1 align="center">
    <picture>
      <img alt="Visu" src="./public/visu.svg" height="30px" />
    </picture>
    Visu
  </h1>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Visu é uma biblioteca de componentes e design system desenvolvida para os produtos Coaktion. A biblioteca utiliza [Vite](https://vitejs.dev/) para o desenvolvimento e build, [React](https://react.dev/) para os componentes e [Tailwindcss](https://tailwindcss.com/) para o design system.

## Instalação

A biblioteca é publicada atualmente no Github Packages, então é necessário informar ao npm em qual registro buscar a biblioteca para a instalação, a melhor maneira de fazer isso é criar um arquivo na raiz do projeto e informar que o registro do Github será utilizado para todas as bibliotecas da organização @coaktion:

1. Crie um arquivo `.npmrc` na raiz do projeto com o conteúdo

```bash
@coaktion:registry=https://npm.pkg.github.com
```

2. Instale a biblioteca no projeto React

```bash
npm install @coaktion/visu
```

## Utilização

### Componentes

Para utilizar os componentes é necessário importar a estilização da biblioteca de `@coaktion/visu/styles`

```typescript
import '@coaktion/visu/styles'
```

Caso esteja utilizando o `tailwindcss` no projeto, faça a importação da estilização da biblioteca juntamente da estilização do tailwindcss

```css
@import '@coaktion/visu/styles';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Com a estilização importada, basta importar um componente e adicionar ele ao projeto seguindo a [documentação dos componentes no storybook(em construção)](https://feat-update-storybook-v7--645ce9be8ed7e2ea5066a152.chromatic.com/)

```typescript
import { Button } from '@coaktion/visu'

function App() {
  return <Button.Root>Clique aqui</Button.Root>
}

export default App
```

### Design System

O Design System do Visu foi criado para ser utilizado em conjunto com o [Tailwindcss](https://tailwindcss.com/), como um plugin. Para utilizar o Design System do Visu basta importar o Design System de `@coaktion/visu/dist/theme-plugin` e adicioná-lo ao arquivo `tailwind.config.ts`


```typescript
import VisuTailwindcssPlugin from '@coaktion/visu/dist/theme-plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [VisuTailwindcssPlugin],
} satisfies Config

```

Ao adicionar o plugin do Visu será possível utilizar todos os tokens do Design System do Visu no projeto, como cores, espaçamentos, etc. Para verificar todos os tokens disponíveis acesse a [documentação do Design System(em construção)](https://feat-update-storybook-v7--645ce9be8ed7e2ea5066a152.chromatic.com/)

# Testes

O projeto utiliza o [Jest](https://jestjs.io/pt-BR/) junto com o [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para realizar os testes dos componentes da Biblioteca.

Os testes se encontram em `__tests__` e cada arquivo ou pasta representa um componente da Biblioteca.

## Desenvolvimento

Para desenvolver um teste certifique-se de que realizou a instalação de todas as dependências, executando `npm install` na raiz do projeto.
O script `test:coverage` está configurado nesse projeto para executar os testes. Para executar o comando certifique-se de que está no diretório do projeto `visu` e execute:

```bash
npm run test:coverage
```

### Test watch

O script `test` está configurado nesse projeto para executar os testes em modo watch. Para executar o comando certifique-se de que está no diretório do projeto `visu` e execute:

```bash
npm run test -- [pasta/arquivo]
```

### Instalação de pacotes

Para instalar pacotes no Visu `packages/visu` acesse a raiz do projeto no terminal `/` e utilize o comando:

```bash
npm install -D [pacote] --workspace=@coaktion/visu
```

## License

[Copyright](../../LICENSE)
