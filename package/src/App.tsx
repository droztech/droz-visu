import LayoutDefault from './layout/Default'
import { Button, DateRange, Drawer, Form, Icon } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState<DateRange>()
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
    setTest(undefined)
  }

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button>Open</Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
              <Drawer.Close asChild>
                <Icon size="sm" className="absolute right-8 top-8">
                  <X />
                </Icon>
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Body>
              <div className="h-[2500px] bg-error">Anything</div>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.Close asChild>
                <Button ghost className="flex-1">
                  Close
                </Button>
              </Drawer.Close>
              <Button className="flex-1">Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Root>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
