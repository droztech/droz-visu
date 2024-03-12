import LayoutDefault from './layout/Default'
import Avatar from './library/Avatar'
import Sidebar from './library/Sidebar'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState<string[]>([
    'Tag1',
    'Tag2',
    'Tag3',
    'TagNumero4BemGrandeParaTestes',
    'Tag5',
    'TagNumero6BemGrandeParaTestes',
    'TagNumero7BemGrandeParaTestesTagNumero7BemGrandeParaTestesTagNumero7BemGrandeParaTestes',
  ])
  const { handleSubmit, watch, reset } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  const clearState = () => {
    reset()
    setTest([])
  }

  // =====
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  // =====

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}

        <Sidebar.Root
          className="px-0"
          expanded={isSidebarExpanded}
          setExpanded={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
          <Sidebar.Header>
            <a key={'g'} href={'/'}>
              LINK-1
            </a>
          </Sidebar.Header>
          <Sidebar.Body>
            <div className="flex flex-col gap-2">
              <Sidebar.Button
                icon={
                  <Avatar
                    className="mx-auto [&>svg]:h-6 [&>svg]:w-6"
                    size="sm"
                    fallback="JT"
                    alt="Avatar"
                  />
                }
                text="John Textor"
              />
              <Sidebar.Button
                icon={
                  <Avatar
                    className="mx-auto [&>svg]:h-6 [&>svg]:w-6"
                    size="sm"
                    fallback="CM"
                    alt="Avatar"
                  />
                }
                text="Charles Midway"
              />
            </div>
          </Sidebar.Body>
        </Sidebar.Root>

        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
