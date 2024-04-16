import Chip from '../Chip'

import { cn } from '@/src/utils/class-merge.helper'
import { Status, StatusClass } from '@types'

import { X } from '@phosphor-icons/react'
import {
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'

const statusVariants: StatusClass = {
  error: { root: 'border-error' },
  success: { root: 'border-success pt' },
  alert: { root: 'border-alert' },
}

export interface TagListRootProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
  disabled?: boolean
  status?: Status
  value?: string[]
  onChange?: (ev: string) => void
}

const TagListRoot: FC<TagListRootProps> = ({
  value,
  onChange,
  children,
  className,
  disabled,
  status,
  ...rest
}) => {
  const RootComponent = useRef<HTMLDivElement | null>(null)

  const rootClass = useMemo(() => {
    if (disabled) return 'bg-gray-200 cursor-not-allowed border-gray'
    if (status) return statusVariants[status].root
    return 'border-gray'
  }, [disabled, status])

  useEffect(() => {
    if (disabled) {
      for (const child of RootComponent.current?.children ?? []) {
        child.setAttribute('disabled', `${disabled}`)
      }
    } else {
      for (const child of RootComponent.current?.children ?? []) {
        child.removeAttribute('disabled')
      }
    }
  }, [disabled])

  const focusInput = useCallback(() => {
    const InputComponent = RootComponent.current?.querySelector('input')
    InputComponent?.focus()
  }, [RootComponent])

  const tagsList = useMemo(
    () =>
      value?.map((item) => (
        <Chip.Root key={item}>
          {item}
          <Chip.Button onClick={() => onChange?.(item)}>
            <X />
          </Chip.Button>
        </Chip.Root>
      )),
    [onChange, value],
  )

  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-solid border-gray focus-within:border-primary focus-within:has-[input:invalid]:!border-error focus-within:has-[input:invalid]:placeholder-shown:outline focus-within:has-[input:invalid]:placeholder-shown:outline-2 focus-within:has-[input:invalid]:placeholder-shown:outline-offset-2 focus-within:has-[input:invalid]:placeholder-shown:outline-gray-900',
        rootClass,
        className,
      )}
    >
      <div className="flex max-h-32 min-h-8 max-w-full flex-wrap items-center gap-2 overflow-y-auto rounded-t-lg bg-gray-200 p-2">
        {tagsList}
      </div>

      {children && (
        /* eslint-disable-next-line */
        <div
          ref={RootComponent}
          className="flex w-full cursor-text gap-3 border-t border-solid border-gray px-4 py-0"
          onClick={focusInput}
          {...rest}
        >
          {children}
        </div>
      )}
    </div>
  )
}

TagListRoot.displayName = 'TagList'

export default TagListRoot
