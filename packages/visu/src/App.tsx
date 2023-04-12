import { Flex, Switch } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [test, setTest] = useState(false)

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
        <label className="flex items-center gap-2">
          Airplane
          <Switch checked={test} onCheckedChange={() => setTest(!test)} />
        </label>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
