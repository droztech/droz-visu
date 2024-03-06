import LayoutDefault from './layout/Default'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, SquaresFour } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import { ReactNode, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState('success')
  const { handleSubmit, watch, reset } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  const clearState = () => {
    reset()
    setTest('')
  }

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <CompRoot status="success">
          <SquaresFour
            size={32}
            weight="bold"
            className={clsx(
              test === 'success' && 'text-success-600',
              test === 'error' && 'text-error-600',
              test === 'loading' && 'text-gray-600',
            )}
          />
          <CompChild status="success">xxx</CompChild>
        </CompRoot>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App

type CompProps = {
  children?: ReactNode
  status?: 'success' | 'error' | 'loading'
}

const CompRoot = ({ status, children }: CompProps) => {
  const rootClass = useMemo(() => {
    switch (status) {
      case 'success':
        return 'bg-success'
      case 'error':
        return 'bg-error'
      case 'loading':
        return 'bg-gray'
      default:
        return 'bg-gray-200'
    }
  }, [status])

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded p-4',
        rootClass,
      )}
    >
      {children}
    </div>
  )
}

const CompChild = ({ status, children }: CompProps) => {
  const rootClass = useMemo(() => {
    switch (status) {
      case 'success':
        return 'text-success-600'
      case 'error':
        return 'text-error-600'
      case 'loading':
        return 'text-gray-600'
      default:
        return 'text-gray-900'
    }
  }, [status])

  return (
    <span className={clsx('text-xl font-bold', rootClass)}>{children}</span>
  )
}
