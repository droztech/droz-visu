import { Checkbox, Flex } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [checked, setChecked] = useState(false)

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
        <Checkbox.Root>
          <Checkbox.Input
            color="secondary"
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
          />
        </Checkbox.Root>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
