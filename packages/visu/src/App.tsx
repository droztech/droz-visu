import { Flex } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

import { useAbcContext } from './library/Toast/Abc'

function App() {
  const [test, setTest] = useState(false)
  const { toast } = useAbcContext()

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
        <button
          onClick={() =>
            toast({
              variant: 'success',
              desc: 'abc',
              title: 'success',
            })
          }
        >
          click
        </button>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
