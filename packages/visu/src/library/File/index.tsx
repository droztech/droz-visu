import { clsx } from 'clsx'
import { X } from 'phosphor-react'
import { ChangeEvent, FC, InputHTMLAttributes, useRef, useState } from 'react'

export interface FileProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  formats: string[]
  onChange?: (data: File | undefined) => void
  value?: File
}

const File: FC<FileProps> = ({
  formats,
  className,
  onChange,
  value,
  ...rest
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files && ev.target.files[0]) {
      const selectedFile = ev.target.files[0]
      if (formats.includes(selectedFile.type) && onChange) {
        onChange(selectedFile)
      } else {
        handleClearFile()
        console.log(selectedFile.type)
      }
    }
  }

  const handleClearFile = () => {
    if (onChange) onChange(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="relative flex items-center">
      <input
        className={clsx(
          'pl-4 pr-10 border border-dashed rounded-lg transition-all cursor-pointer hover:bg-gray-300 active:border-primary',
          dragOver ? 'py-8 bg-gray-300' : 'py-2',
          value ? 'border-primary' : 'border-gray',
          className
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
          className="absolute right-4 transition-colors hover:text-error rounded"
          onClick={handleClearFile}
        >
          <X />
        </button>
      )}
    </div>
  )
}

export default File
