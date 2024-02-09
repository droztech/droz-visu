import {
  ToggleGroupMultipleProps,
  ToggleGroupSingleProps,
  Root,
} from '@radix-ui/react-toggle-group'
import { FC, Ref, forwardRef } from 'react'

export type ToggleRootProps = (
  | ToggleGroupSingleProps
  | ToggleGroupMultipleProps
) & { expanded?: boolean; onChange?: ToggleGroupMultipleProps['onValueChange'] }

const ToggleRoot: FC<ToggleRootProps> = forwardRef<
  HTMLDivElement,
  ToggleRootProps
>(
  (
    { expanded, children, onValueChange, onChange, ...rest },
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <Root
        ref={ref}
        onValueChange={(ev: string & string[]) =>
          (onChange && onChange(ev)) || (onValueChange && onValueChange(ev))
        }
        className="group flex items-stretch justify-center rounded-lg bg-gray-200"
        aria-expanded={!expanded}
        {...rest}
      >
        {children}
      </Root>
    )
  },
)

ToggleRoot.displayName = 'Toggle.Root'

export default ToggleRoot
