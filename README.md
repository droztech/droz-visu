# Visu

Um projeto para a criação, testes e documentação de componentes para os produtos Coaktion.

## Como o projeto funciona?

O projeto é um monorepo, que foi criado utilizando o [Turborepo](https://turbo.build/repo), para saber mais acesse o [Monorepo Handbook](https://turbo.build/repo/docs/handbook). O projeto conta com dois workspaces `apps` e `packages`:

### Apps

- `docs`: Um projeto para a documentação e testes dos componentes criados na biblioteca Visu. Tanto a documentação quanto os testes são realizados no [Storybook](https://storybook.js.org/) que foi configurado nesse projeto.

- `web`: Projeto para validação dos componentes criados na biblioteca Visu. Esse projeto possui a biblioteca instalada e utiliza ela para validar o comportamento da biblioteca e dos componentes em um projeto externo.

### Packages

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).

- `tsconfig`: `tsconfig.json`s used throughout the monorepo.

- `visu`: Projeto onde são desenvolvidos os componentes da bilbioteca Visu. O projeto utiliza [Vite](https://vitejs.dev/) e realiza um [build com o modo lib](https://storybook.js.org/) da pasta `src/library` para a publicação da biblioteca.

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

## Biblioteca

Na Biblioteca é publicado o conteúdo da pasta `dist` que é gerado a partir da pasta `src/library`. Para realizar a publicação precisamos gerar um build da biblioteca que irá criar a pasta `dist` com essa pasta criada podemos então executar o comando `npm publish`. Já está tudo configurado no package.json para a publicação da biblioteca, caso tenha permissão para realizar a publicação o comando deverá funcionar. <b>Nesse primeiro momento a biblioteca está sendo publicada apenas no Github Packages.</b>

### Github Packages

Para realizar a publicação no Github Packages, foi configurado o registry no `package.json` da bilbioteca apontando para `https://npm.pkg.github.com`. Nesse caso estamos modificando o registry padrão que tentaria publicar no NPM. É necessário estar com um token de acesso dando permissão para a publicação da bilbioteca em um arquivo `.npmrc` na raiz do usuário no Linux.

## Links úteis:

Aprenda mais sobre criação de bibliotecas:

- [npm publish](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [Vite build Library mode](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [package.json configs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [Github packages](https://docs.github.com/en/packages/quickstart)

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
