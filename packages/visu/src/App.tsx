import { Sidebar } from '@library'
import { clsx } from 'clsx'
import { House } from 'phosphor-react'

const Test = (data: { color: 'success' | 'error' | 'alert' }) => {
  return (
    <div
      className={`h-96 flex items-center justify-between p-4 bg-${data.color}-300`}
    >
      <span>Hello World</span>
      <span>Hello World</span>
      <span>Hello World</span>
    </div>
  )
}

const Button = (data: { text: string; collapsed?: boolean }) => {
  return (
    <button
      className={clsx(
        'rounded-lg flex flex-row px-4 py-2 transition-colors items-center gap-2',
        'hover:bg-primary hover:text-gray-100 [&>svg]:text-primary [&:hover>svg]:text-gray-100',
        data.collapsed && 'px-2'
      )}
    >
      <House size={24} />
      {!data.collapsed && <span className="text-sm">{data.text}</span>}
    </button>
  )
}

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar.Root>
        <div className="pb-4 pl-4 mb-4 border-b border-gray-300">Projeto X</div>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-2">
            <Button collapsed={false} text="Home" />
            <Button collapsed={false} text="Minhas conexões" />
            <Button collapsed={false} text="Aplicativos" />
          </div>
          <div className="flex flex-col gap-2">
            <Button collapsed={false} text="Configurações" />
            <Button collapsed={false} text="Ajuda" />
          </div>
        </div>
      </Sidebar.Root>
      <div className="flex-1">
        <Test color="success" />
        <Test color="error" />
        <Test color="alert" />
        <Test color="success" />
        <Test color="error" />
        <Test color="alert" />
      </div>
    </div>
  )
}

export default App
