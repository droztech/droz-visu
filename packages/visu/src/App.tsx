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
        {/* <Tooltip.Step
          text={[
            'Este é um exemplo de explicação para Tooltip.',
            'dawdfawf waffawf awfawf',
            'fuaowhflk awfukgha fawfawf',
          ]}
        >
          <Info size={36} />
        </Tooltip.Step> */}
        <div className="bg-background shadow-sm rounded-md p-6 max-w-xs flex gap-2 items-center">
          <span className="text-sm flex-1">
            Este é um exemplo de explicação para Tooltip.
          </span>
          <button className="bg-gray-300 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all">
            Próximo
            <X size={12} />
          </button>
        </div>
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
