import LayoutDefault from './layout/Default'
import { Form, Select } from './library'
import Combobox from './library/Combobox'

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
  const [test, setTest] = useState<string>()
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
        <div className="flex gap-4">
          <Select.Root placeholder="Selecione uma opção" className="w-64">
            {[1, 2, 3, 4].map((item) => (
              <Select.Item key={item} value={`t${item}`}>
                Teste {item}
              </Select.Item>
            ))}
          </Select.Root>
          <Combobox.Root
            placeholder="Selecione uma opção"
            value={test}
            className="w-64"
          >
            <Combobox.Input placeholder="Pesquise uma opção" />
            <Combobox.List>
              <Combobox.Empty>Vazio</Combobox.Empty>
              {[1, 2, 3, 4].map((item) => (
                <Combobox.Item
                  key={item}
                  value={`t${item}`}
                  onSelect={(value) => setTest(value)}
                  selected={test === `t${item}`}
                >
                  Teste {item}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Root>
        </div>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
