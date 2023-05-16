import { zodResolver } from '@hookform/resolvers/zod'
import { Question } from 'phosphor-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import LayoutDefault from './layout/Default'
import { Button } from './library'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const { handleSubmit, watch } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  return (
    <LayoutDefault
      asChild
      terminal={watch()}
      buttons={[
        { icon: <Question />, onClick: () => console.log('Place Anything') },
        { icon: <Question />, onClick: () => console.log('Place Anything') },
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Button.Root light>Clique</Button.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
