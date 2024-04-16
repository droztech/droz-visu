import Chip from '../Chip'

import { cn } from '@/src/utils/class-merge.helper'
import { Status, StatusClass } from '@types'

import { X } from '@phosphor-icons/react'
import { FC, HTMLAttributes, useMemo } from 'react'

const statusVariants: StatusClass = {
  error: { root: 'border-error' },
  success: { root: 'border-success pt' },
  alert: { root: 'border-alert' },
}

export interface TagListRootProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
  disabled?: boolean
  status?: Status
  value?: string[]
  onRemove?: (ev: string) => void
}

const TagListRoot: FC<TagListRootProps> = ({
  value,
  onRemove,
  children,
  className,
  disabled,
  status,
  ...rest
}) => {
  const rootClass = useMemo(() => {
    if (disabled) return 'bg-gray-200 cursor-not-allowed border-gray'
    if (status) return statusVariants[status].root
    return 'border-gray'
  }, [disabled, status])

  const tagsList = useMemo(
    () =>
      value?.map((item) => (
        <Chip.Root key={item}>
          {item}
          <Chip.Button onClick={() => onRemove?.(item)}>
            <X />
          </Chip.Button>
        </Chip.Root>
      )),
    [onRemove, value],
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
      <div
        className="flex w-full cursor-text gap-3 border-t border-solid border-gray"
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}

TagListRoot.displayName = 'TagList'

export default TagListRoot
