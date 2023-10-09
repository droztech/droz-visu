import { Button } from '@droz-js/visu'
import { clsx } from 'clsx'
import { Moon, Sun } from 'phosphor-react'
import { useCallback, useState } from 'react'

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
    <div
      className={clsx(
        'flex min-h-screen w-full flex-col',
        theme === 'darkTheme' && 'dark bg-gray-800 text-gray-100',
      )}
    >
      <header className="flex items-center justify-between p-6">
        <span>Teste</span>
        <Button.Root size="sm" onClick={handleChangeTheme} variant="neutral">
          <Button.Icon>{theme ? <Sun /> : <Moon />}</Button.Icon>
        </Button.Root>
      </header>
      <div className="flex flex-1 items-center justify-center p-6">
        {/* ========================= TEST AREA ========================= */}

        {/* ========================= TEST AREA ========================= */}
      </div>
    </div>
  )
}

export default App
