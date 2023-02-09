<p align="center">
  <h1 align="center">Visu</h1>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Um projeto para a criação, testes e documentação de componentes para os produtos Coaktion.

## Como o projeto funciona?

O projeto é um monorepo, que foi criado utilizando o [Turborepo](https://turbo.build/repo), para saber mais acesse o [Monorepo Handbook](https://turbo.build/repo/docs/handbook). O projeto conta com dois workspaces `apps` e `packages`:

### Apps

- `docs`: Um projeto para a documentação dos componentes criados na biblioteca Visu realizados no [Storybook](https://storybook.js.org/) que foi configurado nesse projeto.

- `web`: Projeto para validação manual dos componentes criados na biblioteca Visu. Esse projeto possui a biblioteca instalada e utiliza ela para validar o comportamento da biblioteca e dos componentes em um projeto externo.

### Packages

- `tsconfig`: `tsconfig.json`s used throughout the monorepo.

- `visu`: Projeto onde são desenvolvidos os componentes da bilbioteca Visu. O projeto utiliza [Vite](https://vitejs.dev), [Stitches](https://stitches.dev/docs/introduction) e realiza o build em [Modo Lib](https://storybook.js.org) da pasta `src/library` para a publicação da biblioteca. O projeto testa os componentes utilizando [Jest](https://jestjs.io) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

### Build

Para executar o build em todos os `apps` e `packages` utilize o comando abaixo na raiz do projeto:

```
npm run build
```

### Desenvolvimento

Para executar em paralelo e no modo de desenvolvimento todos os `apps` e `packages` utilize o comando abaixo na raiz do projeto:

```
npm run dev
```

### Teste

Para executar os testes da biblioteca, acesse o diretório `packages/visu` e utilize o comando abaixo:

```
npm run test
```

Para executar os testes em apenas um arquivo da biblioteca, acesse o diretório `packages/visu` e utilize o comando abaixo:

```
npm run test -- [nome].test.tsx
```

## Biblioteca

Na Biblioteca é publicado o conteúdo da pasta `dist` que é gerado a partir da pasta `src/library`. Para realizar a publicação precisamos gerar um build da biblioteca que irá criar a pasta `dist` com essa pasta criada podemos então executar o comando `npm publish`. Já está tudo configurado no package.json para a publicação da biblioteca, caso tenha permissão para realizar a publicação o comando deverá funcionar. <b>Nesse primeiro momento a biblioteca está sendo publicada apenas no Github Packages.</b>

### Github Packages

Para realizar a publicação no Github Packages, foi configurado o registry no `package.json` da bilbioteca apontando para `https://npm.pkg.github.com`. Nesse caso estamos modificando o registry padrão que tentaria publicar no NPM. É necessário estar com um token de acesso dando permissão para a publicação da bilbioteca em um arquivo `.npmrc` na raiz do usuário no Linux.

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
