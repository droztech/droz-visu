import { Button, Text } from '@library'
import { Envelope } from 'phosphor-react'

import * as Component from '@styles/index'

function App() {
  return (
    <Component.Main>
      <Component.Container>
        {/* ========================= TEST AREA ========================= */}

        <Text color="primary" link="primary" size="3xl" asChild>
          <a href="/">E ai</a>
        </Text>

        <Button.Root>
          <span>Opa</span>
          <Envelope size={32} />
        </Button.Root>

        {/* ========================= TEST AREA ========================= */}
      </Component.Container>
    </Component.Main>
  )
}

export default App
