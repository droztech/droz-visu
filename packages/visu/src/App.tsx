import { Flex, Tooltip } from '@library'
import { clsx } from 'clsx'
import { Info } from 'phosphor-react'

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
        <Tooltip.Step
          text={[
            'Este é um exemplo de explicação para Tooltip.',
            'dawdfawf waffawf awfawf',
            'fuaowhflk awfukgha fawfawf',
          ]}
        >
          <Info size={36} />
        </Tooltip.Step>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
