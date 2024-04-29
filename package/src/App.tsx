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

const list = [
  { value: 't1', label: 'Teste 1' },
  { value: 't2', label: 'Teste 2' },
  { value: 't3', label: 'Teste 3' },
  { value: 't4', label: 'Teste 4' },
]

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
          <Select.Root
            placeholder="Selecione uma opção"
            className="w-64"
            value={test}
            onChange={(ev) => setTest(ev)}
          >
            {list.map(({ label, value }) => (
              <Select.Item key={value} value={value}>
                {label}
              </Select.Item>
            ))}
          </Select.Root>
          <Combobox.Root
            placeholder="Selecione uma opção"
            value={list.find((item) => item.value === test)?.label}
            className="w-64"
          >
            <Combobox.Input placeholder="Pesquise uma opção" />
            <Combobox.List>
              <Combobox.Empty>Vazio</Combobox.Empty>
              {list.map(({ label, value }) => (
                <Combobox.Item
                  key={value}
                  onSelect={() => setTest(value)}
                  selected={test === value}
                >
                  {label}
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
