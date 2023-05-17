import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowClockwise, Eraser } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import LayoutDefault from './layout/Default'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState('')
  const { handleSubmit, watch, reset, setValue, register } =
    useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: { data: '' },
    })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[
        {
          icon: <ArrowClockwise />,
          onClick: () => {
            window.location.reload()
          },
        },
        {
          icon: <Eraser />,
          onClick: () => {
            reset()
            setTest('')
          },
        },
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}

        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
