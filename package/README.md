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

Visu é uma biblioteca de componentes e design system desenvolvida para os produtos Coaktion. A biblioteca utiliza [Vite](https://vitejs.dev/) para o desenvolvimento e build, [React](https://react.dev/) para os componentes e [Tailwindcss](https://tailwindcss.com/) para o design system.

## Instalação

Instale a biblioteca em um projeto React com o comando

```bash
npm install @droz-js/visu
```

## Utilização

### Componentes

O Visu é construido utilizando o Tailwind CSS como base para a estilização dos componentes. Para utilizar os componentes corretamente é necessário ter o Tailwind CSS instalado no projeto. No arquivo `tailwind.config.js` o arquivo `@droz-js/visu/dist/visu.es.js` do Visu precisa ser adicionado ao content para que os componentes recebam as atualizações de estilização ao modificar alguma configuração do tema do Tailwind CSS.

```typescript
import VisuTailwindcssPlugin from '@droz-js/visu/dist/theme-plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/@droz-js/visu/dist/visu.es.js'],
} satisfies Config

```

Com a configuração do `tailwind.config.js` realizada, basta importar um componente e adicionar ele ao projeto seguindo a [documentação dos componentes no storybook(em construção)](https://feat-update-storybook-v7--645ce9be8ed7e2ea5066a152.chromatic.com/)

```typescript
import { Button } from '@droz-js/visu'

function App() {
  return <Button.Root>Clique aqui</Button.Root>
}

export default App
```

#### Utilização sem Tailwindcss
Para utilizar sem o Tailwindcss é necessário importar a estilização de `@droz-js/visu/styles`. **Essa etapa não deve ser realizada caso esteja utilizando o Tailwindcss**

```typescript
import '@droz-js/visu/styles'
```

### Design System

O Design System do Visu foi criado para ser utilizado em conjunto com o [Tailwindcss](https://tailwindcss.com/), como um plugin. Para utilizar o Design System do Visu basta importar o Design System de `@droz-js/visu/dist/theme-plugin` e adicioná-lo ao arquivo `tailwind.config.ts`


```typescript
import VisuTailwindcssPlugin from '@droz-js/visu/dist/theme-plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/@droz-js/visu/dist/visu.es.js'],
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
npm install -D [pacote] --workspace=@droz-js/visu
```

## License

[Copyright](../../LICENSE)
