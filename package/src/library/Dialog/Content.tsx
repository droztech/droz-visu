import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

export interface DialogContentProps extends Dialog.DialogContentProps {
  overlay?: boolean
}

const DialogContent: FC<DialogContentProps> = ({ children, className, overlay = true, ...rest }) => {
  return (
    <Dialog.Portal>
      {overlay && (
        <Dialog.Overlay data-testid="visu-dialog-overlay" className="fixed inset-0 z-40 bg-gray-800 opacity-25" />
      )}
      <Dialog.Content
        className={twMerge(
          'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] overflow-hidden shadow-xl',
          'focus:outline-none',
        )}
        {...rest}
      >
        <div
          className={twMerge(
            'min-w-0 flex h-full min-h-34 w-[90vw] flex-col rounded-xl bg-gray-100',
            'md:w-auto md:min-w-156',
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
