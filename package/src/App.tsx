import LayoutDefault from './layout/Default'
import { Form, DatePicker } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, Calendar as CalendarIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

type DateRange = {
  from: Date | undefined
  to?: Date | undefined
}
const App = () => {
  const [test, setTest] = useState<string[]>([
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
  ])
  const { handleSubmit, watch, reset } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
    reset()
  }

  const clearState = () => {
    reset()
    setTest([])
  }

  const [selectedDates, setSelectedDates] = useState<Date | Date[]>([])

  const handleDateSelect = (date: Date | Date[]) => {
    if (date !== undefined) {
      setSelectedDates(date)
    }
  }

  console.log(selectedDates)

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}

        <DatePicker
          className="w-1/2"
          placeholder="Selecione uma data"
          icon={<CalendarIcon />}
          mode="multiple"
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />

        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
