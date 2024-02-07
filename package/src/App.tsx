import LayoutDefault from './layout/Default'
import { Radio } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState('')
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
        <div>xxx</div>
        <Radio.Root value="xyz">
          <Radio.Item value="abc">abc</Radio.Item>
          <Radio.Item value="xyz">xyz</Radio.Item>
        </Radio.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
