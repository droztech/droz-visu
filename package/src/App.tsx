import LayoutDefault from './layout/Default'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, Question } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Modal from './library/Dialog'
import { Tooltip } from './library'

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
    <LayoutDefault asChild terminal={[watch(), test]} buttons={[{ icon: <Eraser />, onClick: clearState }]}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Modal.Root>
          <Modal.Trigger>
            <div>xxx</div>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header title="Modal" />
            <Modal.Body>
              <div className="flex items-center gap-2">
                <span>Help</span>
                <Tooltip.Close content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas modi quasi? Eos molestiae explicabo eveniet dolorem at dolore quaerat rerum neque, voluptatum consectetur? Magnam sunt saepe mollitia sapiente soluta.">
                  <Question />
                </Tooltip.Close>
              </div>
              <div className="flex items-center gap-2">
                <span>Help</span>
                <Tooltip.Hover content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas modi quasi? Eos molestiae explicabo eveniet dolorem at dolore quaerat rerum neque, voluptatum consectetur? Magnam sunt saepe mollitia sapiente soluta.">
                  <Question />
                </Tooltip.Hover>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
