import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowClockwise, Eraser, House } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import LayoutDefault from './layout/Default'
import { Sidebar } from './library'

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
    <Sidebar.Layout>
      <Sidebar.Root expanded={test} setExpanded={() => setTest(!test)}>
        <Sidebar.Header>
          <h1 className="text-lg">Projeto X</h1>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group>
            <Sidebar.Button text="Home" icon={<House />} />
            <Sidebar.Button text="Home" icon={<House />} />
          </Sidebar.Group>
          <Sidebar.Group>
            <Sidebar.Button text="Home" icon={<House />} />
            <Sidebar.Button text="Home" icon={<House />} />
          </Sidebar.Group>
        </Sidebar.Body>
      </Sidebar.Root>
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
    </Sidebar.Layout>
  )
}

export default App
