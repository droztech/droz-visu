import { Sidebar } from '@library'
import { clsx } from 'clsx'
import { Gear, House, LineSegments, Question } from 'phosphor-react'
import { useState } from 'react'

const Test = ({ className }: { className: string }) => {
  const style = clsx('h-96 flex items-center justify-between p-4', className)
  return (
    <div className={style}>
      <span>Hello World</span>
      <span>Hello World</span>
      <span>Hello World</span>
    </div>
  )
}

const Page = () => {
  return (
    <div className="flex-1">
      <Test className="bg-success-300" />
      <Test className="bg-error-300" />
      <Test className="bg-alert-300" />
      <Test className="bg-success-300" />
      <Test className="bg-error-300" />
      <Test className="bg-alert-300" />
    </div>
  )
}

function App() {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="flex flex-row">
      <Sidebar.Root
        expanded={expanded}
        setExpanded={() => setExpanded(!expanded)}
      >
        <Sidebar.Group>
          <h1>Projeto X</h1>
          <Sidebar.Divider />
          <Sidebar.Button icon={<House />} text="Home" />
          <Sidebar.Button icon={<LineSegments />} text="Minhas conexões" />
        </Sidebar.Group>
        <Sidebar.Group>
          <Sidebar.Button icon={<Gear />} text="Configurações" />
          <Sidebar.Button icon={<Question />} text="Ajuda" />
        </Sidebar.Group>
      </Sidebar.Root>
      <Page />
    </div>
  )
}

export default App
