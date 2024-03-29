import LayoutDefault from './layout/Default'
import { Button, Form } from './library'
import Popover from './library/Popover'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, ShareFat } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

const generateTestItems = () => {
  return ['Item 1', 'Item 2', 'Item blabla', 'Item bloblo', 'Item blibli']
}

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

        <div className="flex w-156 justify-center">
          <Popover.Root>
            <Popover.Trigger>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-200">
                <ShareFat />
              </button>
            </Popover.Trigger>
            <Popover.Content align="center" side="bottom">
              {/* Lista de 5 itens como children */}
              <div className="flex flex-col gap-2">
                <div>aqui placeholer</div>
                {generateTestItems().map((item, index) => (
                  <Button className="w-full gap-2 pt-2" key={index}>
                    {item}
                  </Button>
                ))}
              </div>
            </Popover.Content>
          </Popover.Root>
        </div>

        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
