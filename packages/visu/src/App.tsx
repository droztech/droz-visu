import { zodResolver } from '@hookform/resolvers/zod'
import {
  DeviceMobileCamera,
  DeviceTabletCamera,
  Monitor,
  Moon,
  Sun,
  User,
} from 'phosphor-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import LayoutDefault from './layout/Default'
import { Input } from './library'

const formSchema = z.object({
  data: z.string().nonempty('required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [screen, setScreen] = useState<string>()
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('visuDevTheme') as 'light' | 'dark') ?? 'light'
  )

  const { handleSubmit, watch, register } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { data: '' },
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('visuDevTheme', newTheme)
  }

  const onSubmit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  return (
    <LayoutDefault
      asChild
      terminal={watch()}
      theme={theme}
      screenSize={screen}
      buttons={[
        { icon: theme === 'dark' ? <Sun /> : <Moon />, onClick: toggleTheme },
        { icon: <DeviceMobileCamera />, onClick: () => setScreen('375px') },
        { icon: <DeviceTabletCamera />, onClick: () => setScreen('768px') },
        { icon: <Monitor />, onClick: () => setScreen(undefined) },
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <Input.Root>
          <Input.Icon>
            <User />
          </Input.Icon>
          <Input.Input placeholder="Digite aqui..." {...register('data')} />
        </Input.Root>
        {/* ================================= TEST AREA ================================= */}
      </form>
    </LayoutDefault>
  )
}

export default App
