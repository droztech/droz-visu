<p align="center">
  <picture>
    <img alt="Visu" src="visu.svg" height="64px" />
  </picture>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Uma biblioteca de componentes e design system Droz. Com testes e documentação para todos os componentes.

## Como o projeto funciona?

O projeto é um monorepo, que foi criado utilizando o [Turborepo](https://turbo.build/repo), para saber mais acesse o [Monorepo Handbook](https://turbo.build/repo/docs/handbook). O projeto conta com dois workspaces `docs` e `package`:

### Docs

Projeto onde são desenvolvidas as documentações dos components do Visu. Utilizando principalmente o [Storybook](https://storybook.js.org/). Os componentes documentados são baseados no último build feito na biblioteca, então é necessários que haja pelo menos um build antes de documentar os componentes.

_**Importante:** Antes de criar/modificar uma story de qualquer componente **SEMPRE** construa o Visu e execute o comando `npm run install` para atualizar as dependências do Storybook (especialmente o Visu)_

### Package

Projeto onde são desenvolvidos os componentes e o design system da biblioteca Visu. O projeto utiliza principalmente [Vite](https://vitejs.dev), [React](https://react.dev/) e [Tailwindcss](https://tailwindcss.com/).
O build é realizado na pasta `src/library` para os componentes e copiando os arquivos da pasta `src/theme` para o design system que consiste em um plugin do tailwindcss.
O projeto testa os componentes utilizando [Jest](https://jestjs.io) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

## Script

Abaixo a lista dos scrips principais para a utilização do projeto.

### Build

Para executar o build em `docs` e `package` utilize o comando abaixo na raiz do projeto:

```javascript
npm run build
// npm run build:docs
// npm run build:packages
```

### Desenvolvimento

Para executar em paralelo e no modo de desenvolvimento todos os `docs` e `package` utilize o comando abaixo na raiz do projeto:

```javascript
npm run dev
// npm dev build:docs
// npm dev build:packages
```

### Teste

Para executar os testes da biblioteca, acesse o diretório `package` e utilize o comando abaixo:

```javascript
npm run test
// npm run test:watch
// npm run test:coverage
```

## Biblioteca

Na Biblioteca é publicado o conteúdo da pasta `dist` que é gerado a partir das pastas `src/library` e `src/theme`. Para realizar a publicação precisamos gerar um build da biblioteca que irá criar a pasta `dist` com essa pasta criada podemos então publicar o pacote.

### Publicação NPM

Para realizar a publicação no Github Packages, após ter feito todas as atualizações necessárias em uma PR separada, siga os passos abaixo.

1. Abra uma nova branch chamada "release-x.x.x"
1. Na nova branch rode o script scripts/versioning [major | minor | patch]
1. Dê o nome pro commit de "release: x.x.x"
1. Faça merge dessa branch na main
1. Abra a branch main atualizada
1. Em um terminal autenticado com o NPM, execute `npm publish` dentro da pasta `packages/visu` (importante) e pronto

## Links úteis:

Aprenda mais sobre `Packages`:

- [NPM Publish](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [Vite Build Library Mode](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [package.json Configs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [Github Packages](https://docs.github.com/en/packages/quickstart)

Aprenda mais sobre `Turborepo`:

- [Package Installation](https://turbo.build/repo/docs/handbook/package-installation)
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Aprenda mais sobre `Vite`:

- [Início](https://vitejs.dev/guide/)
- [CLI](https://vitejs.dev/guide/cli.html)
- [Plugins](https://vitejs.dev/guide/using-plugins.html)
- [Library Mode Build](https://vitejs.dev/guide/build.html#library-mode)

Aprenda mais sobre `React`:

- [Início](https://react.dev/learn)
- [Hooks](https://react.dev/reference/react)
- [Built-in Components](https://react.dev/reference/react/components)
- [Built-in APIs](https://react.dev/reference/react/apis)
- [Directives](https://react.dev/reference/react/directives)
- [Client APIs](https://react.dev/reference/react-dom/client)
- [Server APIs](https://react.dev/reference/react-dom/server)

Aprenda mais sobre `Tailwindcss`:

- [Instalação](https://tailwindcss.com/docs/installation/using-postcss)
- [Configuração](https://tailwindcss.com/docs/configuration)
- [Configuração do setup](https://tailwindcss.com/docs/editor-setup)
- [Utility-first](https://tailwindcss.com/docs/utility-first)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Plugins](https://tailwindcss.com/docs/plugins)

Aprenda mais sobre `Storybook`:

- [Story](https://storybook.js.org/docs/react/get-started/whats-a-story)
- [Setup](https://storybook.js.org/docs/react/get-started/setup)
- [Addons](https://storybook.js.org/docs/react/addons/introduction)
- [Testing](https://storybook.js.org/docs/react/writing-tests/introduction)
- [Builders](https://storybook.js.org/docs/react/builders/overview)
- [Controls](https://storybook.js.org/docs/react/essentials/controls)

Aprenda mais sobre `Testes`:

- [Exemplos](https://testing-library.com/docs/react-testing-library/example-intro)
- [API](https://testing-library.com/docs/react-testing-library/api)
- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Expect](https://jestjs.io/pt-BR/docs/expect)

## License

[Copyright](./LICENSE)
