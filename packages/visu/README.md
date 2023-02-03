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

## Utilização

Para utilizar, basta importar um componente e adicionar ele ao projeto seguindo a [documentação dos componentes no storybook]()

```typescript
import { Button } from '@coaktion/visu'

function App() {
  return <Button.Root>Clique aqui</Button.Root>
}

export default App
```

## License

[Copyright](../../LICENSE)
