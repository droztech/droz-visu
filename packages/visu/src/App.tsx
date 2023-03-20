import { Flex } from '@library'
import clsx from 'clsx'

function App() {
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
          'bg-backgroundColor',
          'p-16',
        ])}
      >
        {/* ========================= TEST AREA ========================= */}

        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
