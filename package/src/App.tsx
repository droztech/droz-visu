import LayoutDefault from './layout/Default'
import { Select } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser } from 'phosphor-react'
import { SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState('')
  const { handleSubmit, watch, reset } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  const clearState = () => {
    reset()
    setTest('')
  }

  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (value: SetStateAction<string>) => {
    setSelectedValue(value)
  }
  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}

        <Select.Root
          value={selectedValue}
          onChange={handleChange}
          placeholder="Selecione uma opção"
          enableSearch={true}
          searchPlaceholder="Digite aqui sua busca"
        >
          <Select.Item value="option1">Alice</Select.Item>
          <Select.Item value="option2">Bob</Select.Item>
          <Select.Item value="option3">Charlie</Select.Item>
          <Select.Item value="option4">David</Select.Item>
          <Select.Item value="option5">Emma</Select.Item>
          <Select.Item value="option6">Frank</Select.Item>
          <Select.Item value="option7">Grace</Select.Item>
          <Select.Item value="option8">Harry</Select.Item>
          <Select.Item value="option9">Ivy</Select.Item>
          <Select.Item value="option10">Jack</Select.Item>
          <Select.Item value="option11">Kate</Select.Item>
          <Select.Item value="option12">Liam</Select.Item>
          <Select.Item value="option13">Mia</Select.Item>
          <Select.Item value="option14">Noah</Select.Item>
          <Select.Item value="option15">Olivia</Select.Item>
          <Select.Item value="option16">Peter</Select.Item>
          <Select.Item value="option17">Quinn</Select.Item>
          <Select.Item value="option18">Ryan</Select.Item>
          <Select.Item value="option19">Sophia</Select.Item>
          <Select.Item value="option20">Thomas</Select.Item>
        </Select.Root>

        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
