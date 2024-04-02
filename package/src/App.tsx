import LayoutDefault from './layout/Default'
import { Form, Input, Select } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, MagnifyingGlass } from '@phosphor-icons/react'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

const list = [
  { id: '1', value: 'first', label: 'First Item' },
  { id: '2', value: 'second', label: 'Second Item' },
  { id: '3', value: 'third', label: 'Third Item' },
  { id: '4', value: 'fourth', label: 'Fourth Item' },
  { id: '5', value: 'fifth', label: 'Fifth Item' },
  { id: '6', value: 'sixth', label: 'Sixth Item' },
  { id: '7', value: 'seventh', label: 'Seventh Item' },
  { id: '8', value: 'eighth', label: 'Eighth Item' },
  { id: '9', value: 'ninth', label: 'Ninth Item' },
  { id: '10', value: 'tenth', label: 'Tenth Item' },
]

function App() {
  const [test, setTest] = useState('')
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
    setTest('')
  }

  const filteredList = useMemo(() => {
    if (!test) return list
    return list.filter((item) => {
      const concat = `${item.value.toLowerCase()} - ${item.label.toLocaleLowerCase()}`
      return concat.includes(test.toLocaleLowerCase())
    })
  }, [test])

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Select.Root placeholder="Selecione uma opção">
          <Input.Root className="mb-4">
            <Input.Icon icon={<MagnifyingGlass />} />
            <Input.Input
              placeholder="Pesquise uma opção"
              value={test}
              onChange={(ev) => setTest(ev.target.value)}
            />
          </Input.Root>
          {filteredList.map((item) => (
            <Select.Item key={item.id} value={item.id}>
              {item.value} - {item.label}
            </Select.Item>
          ))}
        </Select.Root>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
