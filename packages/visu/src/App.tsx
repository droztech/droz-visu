import { File, Flex } from '@library'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [file, setFile] = useState<File>()

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
        <File
          formats={['image/png', 'image/jpeg']}
          onChange={(ev) => setFile(ev)}
          value={file}
        />
        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Root>
  )
}

export default App
