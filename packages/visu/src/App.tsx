import LayoutDefault from './layout/Default'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, Airplane, Alarm, Alien } from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Tabs } from '@library'

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

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        
        <div className='w-5/6 h-80 border-primary-500 border'>
          <Tabs.Root triggers={[
            <Tabs.Trigger icon={<Airplane />} key='tab1' title='Avião' value="tab1" />,
            <Tabs.Trigger icon={<Alarm />} key='tab2' title='Alarme' value="tab2" />,
            <Tabs.Trigger icon={<Alien />} key='tab3' title='Alien' value="tab3" />
          ]} defaultValue='tab1'>
            <Tabs.Content key='tab1' value="tab1">Tab 1 content</Tabs.Content>
            <Tabs.Content key='tab2' value="tab2">Tab 2 content</Tabs.Content>
            <Tabs.Content key='tab3' value="tab3">Tab 3 content</Tabs.Content>
          </Tabs.Root>
        </div>

        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
