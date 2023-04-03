<p align="center">
  <h1 align="center">Visu</h1>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Visu é biblioteca de componentes para os produtos Coaktion.

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

## Instalação de pacotes

Para instalar pacotes no Visu `packages/visu` acesse a raiz do projeto no terminal `/` e utilize o comando:

```bash
npm install -D [pacote] --workspace=@coaktion/visu
```

## Utilização

Para utilizar, basta importar um componente e adicionar ele ao projeto seguindo a [documentação dos componentes no storybook]()

```typescript
import { Button } from '@coaktion/visu'

function App() {
  return <Button.Root>Clique aqui</Button.Root>
}

export default App
```

# Testes

O projeto utiliza o [Jest](https://jestjs.io/pt-BR/) junto com o [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para realizar os testes dos componentes da Biblioteca.

Os testes se encontram em `__tests__` e cada arquivo ou pasta representa um componente da Biblioteca.

## Desenvolvimento

Para desenvolver um teste certifique-se de que realizou a instalação de todas as dependências, executando `npm install` na raiz do projeto.
O script `test` está configurado nesse projeto para executar os testes. Para executar o comando certifique-se de que está no diretório do projeto `visu` e execute:

```bash
npm run test
```

### Test watch

O script `test:watch` está configurado nesse projeto para executar os testes em modo watch. Para executar o comando certifique-se de que está no diretório do projeto `visu` e execute:

```bash
npm run test:watch
```

## License

[Copyright](../../LICENSE)
