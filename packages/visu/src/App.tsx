import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowClockwise, Eraser, House, X } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import LayoutDefault from './layout/Default'
import { Button, Menu } from './library'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState(true)
  const { handleSubmit, watch, reset, setValue, register } =
    useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: { data: '' },
    })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Menu.Root expanded={test}>
        <Menu.Header className="flex justify-between items-center">
          <h1 className="text-xl">Projeto X</h1>
          <Button.Root onClick={() => setTest(false)} light>
            <Button.Icon>
              <X />
            </Button.Icon>
          </Button.Root>
        </Menu.Header>
        <Menu.Body>
          <Menu.Group>
            <Menu.Button text="Home" icon={<House />} />
            <Menu.Button text="Home" icon={<House />} />
          </Menu.Group>
          <Menu.Group>
            <Menu.Button text="Home" icon={<House />} />
            <Menu.Button text="Home" icon={<House />} />
          </Menu.Group>
        </Menu.Body>
      </Menu.Root>
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
              setTest(true)
            },
          },
        ]}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ================================= TEST AREA ================================= */}

          {/* ================================= TEST AREA ================================= */}
        </form>
      </LayoutDefault>
    </>
  )
}

export default App
