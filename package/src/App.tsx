import LayoutDefault from './layout/Default'
import { Form } from './library'
import Chip from './library/Chip'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, X } from '@phosphor-icons/react'
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
        <Chip.Root>
          Teste
          <Chip.Button onClick={clearState}>
            <X />
          </Chip.Button>
        </Chip.Root>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
