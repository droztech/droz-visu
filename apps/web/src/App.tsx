import { Moon, Sun } from 'phosphor-react'
import { useCallback, useState } from 'react'

import { Button } from '@coaktion/visu'

import { darkTheme } from '../stitches.config'
import * as C from './styles/index'

function App() {
  const [theme, setTheme] = useState('')

  const handleChangeTheme = useCallback(() => {
    if (theme) {
      setTheme('')
      return
    }
    setTheme(darkTheme)
  }, [theme])

  return (
    <C.Main className={theme}>
      <C.Header>
        <Button.Root onClick={handleChangeTheme} light>
          <Button.Icon>{theme ? <Sun /> : <Moon />}</Button.Icon>
        </Button.Root>
      </C.Header>
      <C.Container>
        {/* ========================= TEST AREA ========================= */}

        {/* ========================= TEST AREA ========================= */}
      </C.Container>
    </C.Main>
  )
}

export default App
