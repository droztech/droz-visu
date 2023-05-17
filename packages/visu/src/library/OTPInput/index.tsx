import { clsx } from 'clsx'
import {
  ChangeEvent,
  ClipboardEvent,
  FC,
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

export interface OTPInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  count: number
  error?: boolean
  onChange?: (data: string) => void
  value?: string
}

const OTPInput: FC<OTPInputProps> = ({
  count,
  error,
  onChange,
  value,
  className,
  ...rest
}) => {
  const [otp, setOtp] = useState<string[]>(Array(count).fill(''))
  const refs = useRef<(HTMLInputElement | null)[]>([])

  const inputColorClass = useMemo(() => {
    return error
      ? 'border-error hover:border-error-600'
      : 'border-gray hover:border-gray-700 active:border-primary'
  }, [error])

  const handleChange = (
    { target }: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setOtp((prevOtp) =>
      prevOtp.map((value, i) => (i === index ? target.value : value))
    )
    if (onChange)
      onChange(
        otp.map((value, i) => (i === index ? target.value : value)).join('')
      )
  }

  const handlePaste = ({ clipboardData }: ClipboardEvent<HTMLInputElement>) => {
    const paste = clipboardData.getData('text/plain').replace(' ', '')
    const pasteArray = paste.split('').slice(0, otp.length)
    setOtp(pasteArray)
    if (onChange) onChange(pasteArray.join(''))
  }

  const handleFocus = () => {
    for (const i in otp) {
      if (otp[i] === '') {
        refs.current[i]?.focus()
        break
      }
    }
  }

  useEffect(() => {
    handleFocus()
  }, [handleFocus])

  useEffect(() => {
    const characters = value?.split('')

    if (characters) {
      for (let i = 0; i < characters.length; i++) {
        if (characters[i]) {
          setOtp((prevOtp) =>
            prevOtp.map((val, ind) => (i === ind ? characters[i] : val))
          )
        }
      }
    }
  }, [value])

  return (
    <div
      className={clsx('flex gap-4 max-sm:gap-2 justify-center', className)}
      onClick={handleFocus}
      {...rest}
    >
      {otp.map((item, index) => (
        <input
          key={index}
          ref={(ref) => (refs.current[index] = ref)}
          className={clsx(
            'flex-1 border rounded h-14 max-w-[3.5rem] w-full text-center text-lg font-semibold transition-colors bg-inherit',
            inputColorClass
          )}
          onChange={(ev) => handleChange(ev, index)}
          onPaste={handlePaste}
          value={otp[index]}
          maxLength={1}
        />
      ))}
    </div>
  )
}

OTPInput.displayName = 'OTPInput'

export default OTPInput
