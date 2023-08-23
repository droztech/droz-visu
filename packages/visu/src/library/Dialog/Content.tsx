import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

export interface DialogContentProps extends Dialog.DialogContentProps {
  overlay?: boolean
}

const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  overlay = true,
  ...rest
}) => {
  return (
    <Dialog.Portal>
      {overlay && (
        <Dialog.Overlay
          data-testid="visu-dialog-overlay"
          className="fixed inset-0 z-40 bg-gray-800 opacity-25"
        />
      )}
      <Dialog.Content
        className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] overflow-hidden shadow-xl focus:outline-none"
        {...rest}
      >
        <div
          className={twMerge(
            'min-h-[220px] min-w-[620px] rounded-xl bg-gray-100 ',
            className,
          )}
        >
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

DialogContent.displayName = 'Dialog.Content'

export default DialogContent
