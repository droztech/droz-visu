<p align="center">
  <h1 align="center">Visu - Docs</h1>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Este projeto foi criado para a Documentação da Biblioteca de Componentes e Design System Visu.

## Visu Docs

O projeto utiliza o [Storybook](https://storybook.js.org/) para realizar a documentação de cada componente da Biblioteca.

A Biblioteca Visu é uma dependência desse projeto, e esse projeto utiliza os componentes da Visu para gerar as `stories`, que ficam na pasta `src/stories`. Cada arquivo pertence à um componente.

## Desenvolvimento

Para desenvolver uma `story` certifique-se de que realizou a instalação de todas as dependências, executando `npm install` na raiz do projeto.
O script `dev` está configurado nesse projeto para executar o Storybook na porta 6006 que é o padrão para o Storybook, para executar o comando certifique-se de que está no diretório do projeto `docs` e execute:

```bash
npm run dev
```

## License

[Copyright](./LICENSE)
