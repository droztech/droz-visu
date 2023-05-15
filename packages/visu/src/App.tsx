import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import {
  ArrowsCounterClockwise,
  Code,
  Moon,
  Sun,
  Terminal,
} from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './library'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isShowingTerminal, setIsShowingTerminal] = useState(false)
  const { handleSubmit, register, getValues, watch, reset } =
    useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: { data: '' },
    })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen bg-[#272727] items-center justify-center flex-col gap-8">
      <div className="flex gap-4 items-center bg-gray-700 px-4 py-2 rounded">
        <Button.Root
          variant="neutral"
          size="xs"
          onClick={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }
        >
          <Button.Icon>{theme === 'dark' ? <Sun /> : <Moon />}</Button.Icon>
        </Button.Root>
        <Button.Root
          variant="neutral"
          size="xs"
          onClick={() => setIsShowingTerminal(!isShowingTerminal)}
        >
          <Button.Icon>
            <Code />
          </Button.Icon>
        </Button.Root>
        <Button.Root
          variant="neutral"
          size="xs"
          onClick={() => {
            reset()
          }}
        >
          <Button.Icon>
            <ArrowsCounterClockwise />
          </Button.Icon>
        </Button.Root>
      </div>
      <div
        className={clsx(
          'min-h-[50vh] w-[90vw] min-w-[320px] max-w-5xl rounded p-16 flex items-center justify-center flex-col gap-4 shadow-sm',
          theme === 'light'
            ? 'bg-gray-100 text-gray-900'
            : 'bg-gray-800 text-gray-100 dark'
        )}
      >
        {/* ========================= TEST AREA ========================= */}
        <form onSubmit={handleSubmit(onSubmit)}></form>
        {/* ========================= TEST AREA ========================= */}
      </div>
      {isShowingTerminal && (
        <pre className="bg-gray-700 py-2 px-4 rounded w-[90vw] min-w-[320px] max-w-5xl text-gray-100 relative min-h-12">
          {JSON.stringify(watch(), null, 2)}
          <button
            className="absolute top-2 right-2 p-2 rounded bg-gray-800 transition-colors hover:bg-gray-900"
            onClick={() => console.log(getValues())}
          >
            <Terminal />
          </button>
        </pre>
      )}
    </div>
  )
}

export default App
