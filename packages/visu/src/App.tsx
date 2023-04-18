import { Flex, Pagination } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [test, setTest] = useState(6)

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

        <Pagination
          current={test}
          pageCount={15}
          onPageChange={(ev) => setTest(ev)}
        />

        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
