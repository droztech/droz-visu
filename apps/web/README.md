<p align="center">
  <h1 align="center">
    <picture>
      <img alt="Visu" src="../../packages/visu/public/visu.svg" height="30px" />
    </picture>
    Visu - Manual Tests
  </h1>
</p>

<p align="center">
  <a href="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml">
    <img src="https://github.com/Coaktion/Droz-Visu/actions/workflows/build-and-test.js.yml/badge.svg" alt="CI/CD visu">
  </a>
</p>

Este projeto foi criado para testar a Biblioteca de Componentes Visu de forma manual. O objetivo é conseguir testar o comportamento e estilização dos componentes quando instalados em um projeto.

## Visu Manual Tests

O projeto utiliza o [Vite](https://vitejs.dev/), [React](https://pt-br.reactjs.org/) e [Tailwindcss](https://tailwindcss.com/) para criar o ambiente em que os testes manuais possam ser executados.

A Biblioteca Visu é uma dependência desse projeto, e para testar um componente basta importar o componente no `src/App.tsx` e utilizar ele para verificar se está tudo ok.
## Testar um componente ou design system

Certifique-se de que realizou a instalação de todas as dependências, executando `npm install` na raiz do projeto.
Execute o projeto com o script `dev`, utilizando o comando:

```bash
npm run dev
```

Entre no arquivo `src/App.tsx` e insira o componente na área de testes ou utilize o design system com tailwindcss.


```typescript
function App() {
  return (
    <C.Main>
      <C.Container>
        {/* ==================== TEST AREA ==================== */}



        {/* ==================== TEST AREA ==================== */}
      </C.Container>
    </C.Main>
  )
}
```



## License

[Copyright](./LICENSE)
