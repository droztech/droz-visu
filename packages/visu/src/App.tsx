import { Flex, Select } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [test, setTest] = useState('maybe')

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
        <div className="w-4 h-4 bg-error" onClick={() => console.log(test)} />
        <Select
          value={test}
          onChange={(data) => setTest(data)}
          placeholder="Escolha uma opção"
          options={[
            { value: 'yes', label: 'Sim' },
            { value: 'no', label: 'Não' },
            { value: 'maybe', label: 'Talvez' },
          ]}
        />
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
