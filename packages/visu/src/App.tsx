import { Flex } from '@library'
import { clsx } from 'clsx'
import { Check } from 'phosphor-react'
import { useState } from 'react'

function App() {
  const [checked, setChecked] = useState(true)

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
          <div
            className={clsx(
              'cursor-pointer border-2 text-gray-100 w-4 h-4 transition-all flex items-center justify-center rounded-sm overflow-hidden',
              {
                'bg-primary border-primary': checked,
                'border-gray hover:border-primary active:border-primary active:bg-primary':
                  !checked,
              }
            )}
            onClick={() => setChecked(!checked)}
          >
            {checked && <Check />}
          </div>
          <span>Opa</span>
        </label>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
