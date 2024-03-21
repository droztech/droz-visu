import * as RadixPopover from '@radix-ui/react-popover'
import { FC } from 'react'

export interface PopoverRootProps extends RadixPopover.PopoverProps {
  // align?: Popover.SelectContentProps['align']
  className?: string
  placeholder?: string
  searchPlaceholder?: string
  portalContainer?: HTMLElement | null
  // position?: Popover.SelectContentProps['position']

  onChange?: (value: string) => void
  enableSearch?: boolean
}

const PopoverRoot: FC<PopoverRootProps> = ({
  // align = 'center',
  children,
  className,
  placeholder,
  searchPlaceholder,
  portalContainer,
  // position = 'popper',
  ...rest
}) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <div>ICON</div>
        </button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className="PopoverContent" sideOffset={5}>
          <div>botões de seleção</div>
          <RadixPopover.Close className="PopoverClose" aria-label="Close">
            <div>ICONE DE FECHAR</div>
          </RadixPopover.Close>
          <RadixPopover.Arrow className="PopoverArrow" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

PopoverRoot.displayName = 'Popover.Root'

export default PopoverRoot
