import LayoutDefault from './layout/Default'
import { Form, Input } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Eraser } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState('')
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
    reset()
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
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}

        <Form.Group>
          <Form.Label>
            <Envelope />
            Email
          </Form.Label>
          {/* === children === */}
          <Input.Root>
            <Input.Input />
          </Input.Root>
          {/* === children === */}
          <Form.Message status="alert">{errors.data?.message}</Form.Message>
        </Form.Group>

        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
