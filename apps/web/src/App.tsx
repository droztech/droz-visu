import { Button, Input, Text } from '@coaktion/visu'
import { Envelope } from 'phosphor-react'
import * as C from './styles/index'

function App() {
  return (
    <C.Main>
      <C.Container>
        {/* ========================= TEST AREA ========================= */}

        <Button.Root onClick={() => {console.log('click')}}>Botão</Button.Root>

        <Button.Root onClick={() => {console.log('click')}}>
          Botão com Ícone
          <Button.Icon>
            <Envelope />
          </Button.Icon>
        </Button.Root>

        <Input.Root>
          <Input.Input placeholder='Input' />
        </Input.Root>

        <Input.Root>
          <Input.Input placeholder='Input com ícone' />
          <Input.Icon>
            <Envelope/>
          </Input.Icon>
        </Input.Root>

        <Input.Root>
          <Input.Input placeholder='Input com ação no ícone' />
          <Input.Icon onClick={() => {console.log('click')}}>
            <Envelope/>
          </Input.Icon>
        </Input.Root>

        <Text>Text</Text>

        <Text color='primary' size="lg" underline link="primary" as='a'>
          Text como link
        </Text>

        {/* ========================= TEST AREA ========================= */}
      </C.Container>
    </C.Main>
  )
}

export default App
