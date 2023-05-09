import { Flex, Select } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [test, setTest] = useState('')

  return (
    <Flex.Root center className="min-h-screen bg-gray-800">
      <Flex.Col
        center
        className={clsx([
          'min-h-[40vh]',
          'w-[95vw]',
          'max-w-3xl',
          'rounded-lg',
          'border-2',
          'border-solid',
          'border-gray-500',
          'bg-background',
          'p-16',
        ])}
      >
        {/* ========================= TEST AREA ========================= */}
        <Select.Root
          value={test}
          onValueChange={(ev) => setTest(ev)}
          placeholder="Escolha uma opção"
        >
          <Select.Item value="yes">Sim</Select.Item>
          <Select.Item value="no">Não</Select.Item>
          <Select.Item value="maybe">Talvez</Select.Item>
          <Select.Item value="maybeYesOrNo">
            Talvez Sim ou Talvez Não Talvez Sim ou Talvez Não
          </Select.Item>
        </Select.Root>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
