<p align="center">
  <h1 align="center">Visu - Tests</h1>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Este projeto foi criado para os Testes da Biblioteca de Componentes Visu

## Visu Tests

O projeto utiliza o [Jest](https://jestjs.io/pt-BR/) junto com o [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para realizar os testes dos componentes da Biblioteca.

A Biblioteca Visu é uma dependência desse projeto, e esse projeto utiliza o Jest com React Testing Library para testar os componentes da componentes da Visu. Os testes se encontram em `__tests__` e cada arquivo representa um componente da Biblioteca.

## Desenvolvimento

Para desenvolver um teste certifique-se de que realizou a instalação de todas as dependências, executando `npm install` na raiz do projeto.
O script `test` está configurado nesse projeto para executar os testes. Para executar o comando certifique-se de que está no diretório do projeto `web` e execute:

```bash
npm run test
```

### Test watch

O script `test:watch` está configurado nesse projeto para executar os testes em modo watch. Para executar o comando certifique-se de que está no diretório do projeto `web` e execute:

```bash
npm run test:watch
```

## License

[Copyright](./LICENSE)
