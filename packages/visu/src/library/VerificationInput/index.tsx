import { clsx } from 'clsx'
import {
  ChangeEvent,
  ClipboardEvent,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface VerificationInputProps extends HTMLAttributes<HTMLDivElement> {
  count: number
}

const VerificationInput: FC<VerificationInputProps> = ({
  count,
  className,
  ...rest
}) => {
  const [otp, setOtp] = useState<string[]>(Array(count).fill(''))
  const refs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (
    { target }: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setOtp((prevOtp) =>
      prevOtp.map((value, i) => (i === index ? target.value : value))
    )
  }

  const handlePaste = ({ clipboardData }: ClipboardEvent<HTMLInputElement>) => {
    const paste = clipboardData.getData('text/plain').replace(' ', '')
    const pasteArray = paste.split('').slice(0, otp.length)
    setOtp(pasteArray)
  }

  useEffect(() => {
    for (const i in otp) {
      if (otp[i] === '') {
        refs.current[i]?.focus()
        break
      }
    }
  }, [otp])

  return (
    <div className={clsx('flex gap-4 justify-center', className)} {...rest}>
      <button
        className="h-4 w-4 bg-error rounded-sm"
        onClick={() => console.log(otp)}
      />
      {otp.map((item, index) => (
        <input
          key={index}
          ref={(ref) => (refs.current[index] = ref)}
          className="flex-1 border rounded border-gray h-14 max-w-[3.5rem] w-full text-center text-lg font-semibold"
          onChange={(ev) => handleChange(ev, index)}
          onPaste={handlePaste}
          value={otp[index].charAt(0)}
          maxLength={1}
        />
      ))}
    </div>
  )
}

export default VerificationInput
