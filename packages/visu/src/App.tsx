import { Flex, FloatCard } from '@library'
import { clsx } from 'clsx'
import { Question } from 'phosphor-react'

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
          'bg-background',
          'p-16',
        ])}
      >
        {/* ========================= TEST AREA ========================= */}
        <FloatCard.Root>
          <FloatCard.Trigger>
            <Question size={32} />
          </FloatCard.Trigger>
          <FloatCard.Content side="right">
            <span>Hello</span>
          </FloatCard.Content>
        </FloatCard.Root>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
