import { Flex } from '@library'
import { clsx } from 'clsx'
import { Info } from 'phosphor-react'

import Tooltip from './library/Tooltip'

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
        <Tooltip.Root
          text={[
            'Este é um exemplo de explicação para Tooltip.',
            'Este é um exemplo de explicação para ABC.',
          ]}
          // text="Este é um exemplo de explicação para Tooltip."
        >
          <Info size={36} />
        </Tooltip.Root>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
