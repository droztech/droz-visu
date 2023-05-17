import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowClockwise, Eraser } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import LayoutDefault from './layout/Default'
import { Checkbox } from './library'

const formSchema = z.object({
  // data: z.string().nonempty('required'),
  data: z.boolean(),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState(false)
  const { handleSubmit, watch, reset, setValue } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: true },
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
            setTest(false)
          },
        },
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Checkbox.Root
          value={watch('data')}
          onChange={(ev) => setValue('data', ev)}
        >
          <Checkbox.Indicator />
        </Checkbox.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
