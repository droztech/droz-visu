import LayoutDefault from './layout/Default'
import { Accordion } from './library'

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
        <Accordion.Root type="single" collapsible>
          {[...Array(3)].map((item, index) => (
            <Accordion.Item
              key={index}
              value={index.toString()}
              className="w-72"
            >
              <Accordion.Header>
                <span>xxx</span>
                <Accordion.Trigger />
              </Accordion.Header>
              <Accordion.Content>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti odio tempore magni error, illo placeat minus
                  accusantium, veniam atque voluptate iusto rerum nemo
                  aspernatur obcaecati repellendus, mollitia beatae eos
                  assumenda.
                </span>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
