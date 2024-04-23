import LayoutDefault from './layout/Default'
import { Form, Table } from './library'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eraser } from '@phosphor-icons/react'
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
          <Table.Root isLoading>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Description</Table.Head>
                <Table.Head className="text-right">Last Update</Table.Head>
                <Table.Head className="w-[1%] text-right">Actions</Table.Head>
              </Table.Row>
            </Table.Header>
            {/* <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell className="text-right">
                {new Date().toISOString()}
              </Table.Cell>
              <Table.Cell className="text-right">
                <Button>
                  <Trash />
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell className="text-right">
                {new Date().toISOString()}
              </Table.Cell>
              <Table.Cell className="text-right">
                <Button>
                  <Trash />
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell className="text-right">
                {new Date().toISOString()}
              </Table.Cell>
              <Table.Cell className="text-right">
                <Button>
                  <Trash />
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body> */}
          </Table.Root>
        </div>
        {/* ================================= TEST AREA ================================= */}
      </Form.Root>
    </LayoutDefault>
  )
}

export default App
