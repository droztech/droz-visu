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

export interface TagInputRootProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
  disabled?: boolean
  status?: Status
  value?: string[]
  onChange?: (ev: string[]) => void
}

const TagInputRoot: FC<TagInputRootProps> = ({
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

  const handleRemoveTag = useCallback(
    (tag: string) => {
      const newValue = value?.filter((item) => item !== tag)
      newValue && onChange?.(newValue)
    },
    [onChange, value],
  )

  const tagsList = useMemo(
    () =>
      value?.map((item) => (
        <div
          className="flex max-w-full items-center gap-1 rounded-3xl bg-primary-200 px-4 py-1"
          key={item}
        >
          <span className="ellipsis text-xs">{item}</span>
          <button
            className="rounded-full p-0.5 transition-all hover:bg-primary-300"
            onClick={() => handleRemoveTag(item)}
          >
            <X size={10} />
          </button>
        </div>
      )),
    [handleRemoveTag, value],
  )

  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-solid border-gray focus-within:border-primary focus-within:has-[input:invalid]:!border-error focus-within:has-[input:invalid]:placeholder-shown:outline focus-within:has-[input:invalid]:placeholder-shown:outline-2 focus-within:has-[input:invalid]:placeholder-shown:outline-offset-2 focus-within:has-[input:invalid]:placeholder-shown:outline-gray-900',
        rootClass,
        className,
      )}
    >
      {value && value.length > 0 && (
        <div className="flex max-h-32 max-w-full flex-wrap items-center gap-2 overflow-y-auto rounded-t-lg border-b border-gray bg-gray-200 p-2">
          {tagsList}
        </div>
      )}
      {/* eslint-disable-next-line */}
    <div
        ref={RootComponent}
        className="flex cursor-text gap-3 px-4 py-0"
        onClick={focusInput}
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}

TagInputRoot.displayName = 'Input.Root'

export default TagInputRoot
