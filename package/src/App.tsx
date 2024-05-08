import LayoutDefault from './layout/Default'
import { Form, Select } from './library'

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
  { value: 't5', label: 'Teste 5' },
  { value: 't6', label: 'Teste 6' },
  { value: 't7', label: 'Teste 7' },
  { value: 't8', label: 'Teste 8' },
  { value: 't9', label: 'Teste 9' },
  { value: 't10', label: 'Teste 10' },
  { value: 't11', label: 'Teste 11' },
  { value: 't12', label: 'Teste 12' },
  { value: 't13', label: 'Teste 13' },
  { value: 't14', label: 'Teste 14' },
  { value: 't15', label: 'Teste 15' },
  { value: 't16', label: 'Teste 16' },
  { value: 't17', label: 'Teste 17' },
  { value: 't18', label: 'Teste 18' },
  { value: 't19', label: 'Teste 19' },
  { value: 't20', label: 'Teste 20' },
  { value: 't21', label: 'Teste 21' },
  { value: 't22', label: 'Teste 22' },
  { value: 't23', label: 'Teste 23' },
  { value: 't24', label: 'Teste 24' },
  { value: 't25', label: 'Teste 25' },
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
            scrollable
          >
            {list.map(({ label, value }) => (
              <Select.Item key={value} value={value}>
                {label}
              </Select.Item>
            ))}
          </Select.Root>
        </div>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
