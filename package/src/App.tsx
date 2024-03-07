import LayoutDefault from './layout/Default'
import { Input } from './library'

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

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Input.Root className="w-96">
          <Input.Icon icon={<Eraser />} />
          <Input.Tags
            placeholder="Exemplo: Tag1,Tag_2,Tag__3"
            value={test}
            onChange={(ev) => setTest(ev)}
          />
        </Input.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
