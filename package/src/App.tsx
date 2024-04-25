import LayoutDefault from './layout/Default'
import { Button, Form, Table } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser, Pencil } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  data: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

function App() {
  const [test, setTest] = useState<string[]>([
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
    'test10',
  ])
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormSchemaProps>({
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

  return (
    <LayoutDefault
      asChild
      terminal={[watch(), test]}
      buttons={[{ icon: <Eraser />, onClick: clearState }]}
    >
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        {/* ================================= TEST AREA ================================= */}
        <div className="w-full border border-error">
          <Table.Root fixed hide={[1, 3]}>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Description</Table.Head>
                <Table.Head className="text-right">Last Update</Table.Head>
                <Table.Head className="text-right">Actions</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {test.map((item, index) => (
                <Table.Row
                  key={item}
                  selected={['test5', 'test6'].includes(item)}
                >
                  <Table.Cell>{item}</Table.Cell>
                  <Table.Cell>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, asperiores quis. Ex laboriosam quasi fugit
                      obcaecati a quaerat sapiente culpa placeat dicta quisquam
                      quibusdam deserunt sit, cum adipisci, labore iusto.
                    </span>
                  </Table.Cell>
                  <Table.Cell className="justify-end">
                    {new Date().toISOString()}
                  </Table.Cell>
                  <Table.Cell className="justify-end">
                    <Button light size="sm">
                      <Pencil />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
