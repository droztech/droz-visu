import { Flex, Radio } from '@library'
import * as RadixRadio from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [checked, setChecked] = useState('yes')

  return (
    <Flex.Root center className="min-h-screen bg-gray-800">
      <Flex.Col
        center
        className={clsx([
          'max-w-[95vw]',
          'min-w-[60vw]',
          'min-h-[40vh]',
          'rounded-lg',
          'border-2',
          'border-solid',
          'border-gray-500',
          'bg-background',
          'p-16',
        ])}
      >
        {/* ========================= TEST AREA ========================= */}
        <RadixRadio.Root value={checked} onValueChange={(ev) => setChecked(ev)}>
          <Radio.Item value="yes" color="secondary" currentValue={checked}>
            Sim
          </Radio.Item>
          <Radio.Item value="no" color="secondary" currentValue={checked}>
            Não
          </Radio.Item>
        </RadixRadio.Root>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
