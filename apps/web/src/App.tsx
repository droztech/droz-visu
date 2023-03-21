import { clsx } from 'clsx'
import { Moon, Sun } from 'phosphor-react'
import { useCallback, useState } from 'react'

import { Button, Flex } from '@coaktion/visu'

function App() {
  const [theme, setTheme] = useState('')

  const handleChangeTheme = useCallback(() => {
    if (theme) {
      setTheme('')
      return
    }
    setTheme('darkTheme')
  }, [theme])

  return (
    <Flex.Col
      className={clsx([
        'bg-backgroundColor',
        'text-gray-100',
        'h-screen',
        'w-screen',
      ])}
      justify="start"
      items="center"
    >
      <Flex.Row
        className={clsx(['w-full', 'p-2'])}
        items="center"
        justify="end"
      >
        <Button.Root onClick={handleChangeTheme} light>
          <Button.Icon>{theme ? <Sun /> : <Moon />}</Button.Icon>
        </Button.Root>
      </Flex.Row>
      <Flex.Col className={clsx(['max-w-3xl', 'w-[95vw]', 'h-full'])} center>
        {/* ========================= TEST AREA ========================= */}

        {/* ========================= TEST AREA ========================= */}
      </Flex.Col>
    </Flex.Col>
  )
}

export default App
