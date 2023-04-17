import { Flex } from '@library'
import { useToast } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [test, setTest] = useState(false)
  const { toast } = useToast()

  const handleClick = () => {
    toast.success({
      title: 'Sucesso',
      desc: 'Descrição de Sucesso',
    })
  }

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
          className="py-2 px-4 rounded bg-primary text-gray-100"
          onClick={handleClick}
        >
          Toast
        </button>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
