import { Sidebar } from '@library'
import { clsx } from 'clsx'
import { Gear, House, LineSegments, Question } from 'phosphor-react'
import { useState } from 'react'

const Test = (data: { color: 'success' | 'error' | 'alert' }) => {
  return (
    <div
      className={clsx(
        'h-96 flex items-center justify-between p-4',
        data.color === 'success' && 'bg-success-300',
        data.color === 'error' && 'bg-error-300',
        data.color === 'alert' && 'bg-alert-300'
      )}
    >
      <span>Hello World</span>
      <span>Hello World</span>
      <span>Hello World</span>
    </div>
  )
}

const Layout = () => {
  return (
    <div className="flex-1">
      <Test color="success" />
      <Test color="error" />
      <Test color="alert" />
      <Test color="success" />
      <Test color="error" />
      <Test color="alert" />
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
          <Sidebar.Button icon={<House />}>Home</Sidebar.Button>
          <Sidebar.Button icon={<LineSegments />}>
            Minhas conexões
          </Sidebar.Button>
        </Sidebar.Group>
        <Sidebar.Group>
          <Sidebar.Button icon={<Gear />}>Configurações</Sidebar.Button>
          <Sidebar.Button icon={<Question />}>Ajuda</Sidebar.Button>
        </Sidebar.Group>
      </Sidebar.Root>
      <Layout />
    </div>
  )
}

export default App
