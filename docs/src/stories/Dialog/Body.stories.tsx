import { Button, Dialog, DialogBodyProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogBodyProps> = {
  title: 'Dialog/Body',
  component: Dialog.Body,
  argTypes: {
    children: {
      control: 'none',
      description: 'Conteúdo a ser exibido no corpo do Dialog aberto.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: true, value: 'React.ReactNode' },
    },
  },
  args: {
    children: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/(Global)-Droz-Design-System?type=design&node-id=4625-2063&mode=design&t=eYqgLWw8loUHfxvB-0',
      allowFullscreen: true,
    },
  },
  decorators: [
    (Story) => (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Story />
        </Dialog.Content>
      </Dialog.Root>
    ),
  ],
} as Meta<DialogBodyProps>

export default meta
type DialogBodyStory = StoryObj<DialogBodyProps>

export const Comum: DialogBodyStory = {
  args: {
    children: <span>Dialog.Body</span>,
  },
  render: (args) => {
    return <Dialog.Body {...args}></Dialog.Body>
  },
}

export const ComTextoGrande: DialogBodyStory = {
  name: 'Com conteúdo extenso',
  args: {
    children: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sed arcu eget neque ultricies venenatis a aliquet purus. Sed in
        hendrerit augue. Suspendisse dignissim eros quam, sit amet ullamcorper
        ante egestas scelerisque. Proin rhoncus vehicula orci, id aliquet arcu
        porta nec. Aliquam erat volutpat. Aliquam tincidunt nunc id ante
        blandit, non consequat lectus lobortis. Nunc et libero at dui fermentum
        dictum. Morbi nibh libero, molestie non vulputate facilisis, euismod
        eget ex. Sed dapibus pellentesque est, sed scelerisque magna consequat
        sit amet. Aliquam sit amet tellus eu elit feugiat feugiat ac eu lectus.
        Sed vel venenatis ipsum. Sed eu sapien sodales libero tincidunt
        ultricies. Pellentesque sed quam libero. Curabitur eu quam erat. Nam sed
        ante id felis mattis pharetra in in massa. Sed sit amet metus ex. Cras
        in lacus faucibus, consectetur eros nec, pellentesque mauris. Donec at
        fringilla tortor, eu malesuada lacus. Phasellus quis tincidunt nisi. Ut
        quis ultrices libero. Nunc mi mauris, porta quis justo id, scelerisque
        mattis ipsum. Etiam laoreet tincidunt nisi eu fringilla. Cras tempor
        accumsan metus, pellentesque lobortis nulla auctor laoreet. Donec
        suscipit enim lacus, non dictum massa posuere posuere. Etiam facilisis
        varius urna, nec aliquam nulla vulputate at. Donec dignissim eu ipsum
        eget venenatis. Nam bibendum eleifend orci quis viverra. Mauris
        malesuada tempus libero, ac tristique est fermentum sit amet. Sed eget
        purus at diam venenatis pretium eu et libero. Mauris commodo suscipit
        ipsum non lobortis. Praesent consectetur ex in arcu congue consequat
        vitae et mauris. Pellentesque sit amet dolor sit amet lacus efficitur
        bibendum rhoncus in justo. Donec facilisis sapien neque, eu mollis enim
        consequat vel. Duis luctus mi urna, lobortis varius augue eleifend a.
        Aliquam erat volutpat. Aenean accumsan, mauris sed lobortis elementum,
        nisi nunc malesuada ante, et eleifend mauris libero vitae quam. Vivamus
        semper vestibulum risus, id auctor justo venenatis ac. Sed interdum eu
        erat at bibendum. Mauris quis erat ligula. Nunc mattis dolor at
        sollicitudin sollicitudin. Quisque sit amet sapien neque. Sed
        ullamcorper eget urna non vestibulum. Aliquam tempor ante ut dui dapibus
        lobortis. Duis consequat justo lacus, ac ullamcorper dolor varius
        congue. Curabitur placerat, ligula in tincidunt auctor, magna turpis
        fringilla mi, non laoreet nulla risus id dui. Etiam accumsan aliquet leo
        sit amet lacinia. Suspendisse euismod pellentesque leo nec hendrerit.
        Etiam vestibulum egestas ultrices. Ut tempus massa interdum turpis
        suscipit, ut pellentesque arcu porta. Nulla nec ex fermentum nulla
        dapibus volutpat. Suspendisse efficitur sapien eu quam mollis lobortis.
        Suspendisse potenti. Vivamus vulputate purus sed arcu feugiat, et
        malesuada mi fringilla. In sit amet sem tincidunt, efficitur tortor
        quis, ullamcorper sapien. Curabitur vel erat a ligula posuere tempor id
        ac odio. Fusce sem risus, accumsan non rutrum sed, vulputate vel mi.
        Vestibulum ante velit, finibus eu iaculis quis, feugiat nec augue.
        Pellentesque sed interdum tellus, vitae sollicitudin urna. Sed elementum
        sem non lacus commodo volutpat. Maecenas eget eleifend quam. Vivamus
        consectetur ultricies tortor, ut fermentum enim semper sit amet.
      </span>
    ),
  },
  render: (args) => {
    return <Dialog.Body {...args}></Dialog.Body>
  },
}
