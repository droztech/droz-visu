import { cn } from '@/src/utils/class-merge.helper'

import { X } from '@phosphor-icons/react'
import { ChangeEvent, FC, InputHTMLAttributes, useRef, useState } from 'react'

export interface FileProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  formats?: string[] | string
  onChange?: (data: File | undefined) => void
  value?: File
}

const File: FC<FileProps> = ({
  className,
  formats,
  onChange,
  value,
  ...rest
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleClearFile = () => {
    if (onChange) onChange(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files && ev.target.files[0]) {
      const selectedFile = ev.target.files[0]

      if (formats && !formats.includes(selectedFile.type)) {
        handleClearFile()
        return console.log(new Error(`invalid ${selectedFile.type} file`))
      }

      if (onChange) onChange(selectedFile)
    }
  }

  return (
    <div className="relative flex items-center">
      <input
        className={cn(
          'cursor-pointer rounded-lg border border-dashed pl-4 pr-10 transition-all hover:bg-gray-300 active:border-primary',
          dragOver ? 'bg-gray-300 py-8' : 'py-2',
          value ? 'border-primary' : 'border-gray',
          className,
        )}
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        onDragEnter={() => setDragOver(true)}
        onDragLeave={() => setDragOver(false)}
        onDrop={() => setDragOver(false)}
        {...rest}
      />
      {value && (
        <button
          className="absolute right-4 rounded transition-colors hover:text-error"
          onClick={handleClearFile}
        >
          <X />
        </button>
      )}
    </div>
  )
}

File.displayName = 'File'

export default File
