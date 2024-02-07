import { cn } from '@/src/utils/class-merge.helper'

import {
  ChangeEvent,
  ClipboardEvent,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useCallback,
  useEffect,
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

const OTPInput = forwardRef<HTMLInputElement, OTPInputProps>(
  (
    { count, error, onChange, value, className, ...rest },
    forwardedRef: LegacyRef<HTMLDivElement> | undefined,
  ) => {
    const [otp, setOtp] = useState<string[]>(Array(count).fill(''))
    const refs = useRef<(HTMLInputElement | null)[]>(Array(count).fill(null))

    const handleChange = (
      { target }: ChangeEvent<HTMLInputElement>,
      index: number,
    ) => {
      setOtp((prevOtp) =>
        prevOtp.map((value, i) => (i === index ? target.value : value)),
      )
      if (onChange)
        onChange(
          otp.map((value, i) => (i === index ? target.value : value)).join(''),
        )
    }

    const handlePaste = ({
      clipboardData,
    }: ClipboardEvent<HTMLInputElement>) => {
      const paste = clipboardData.getData('text/plain').replace(' ', '')
      const pasteArray = paste.split('').slice(0, otp.length)
      setOtp(pasteArray)
      if (onChange) onChange(pasteArray.join(''))
    }

    const handleFocus = useCallback(() => {
      for (const i in otp) {
        if (otp[i] === '') {
          refs.current[i]?.focus()
          break
        }
      }
    }, [otp])

    useEffect(() => {
      handleFocus()
    }, [handleFocus])

    useEffect(() => {
      const characters = value?.split('')
      const newOtp = Array(count).fill('')

      if (characters?.length) {
        for (let i = 0; i < characters.length; i++) {
          if (characters[i]) {
            newOtp[i] = characters[i]
          }
        }
      }
      setOtp(newOtp)
    }, [count, value])

    return (
      <div
        className={cn('flex justify-center gap-4 max-sm:gap-2', className)}
        ref={forwardedRef}
        {...rest}
      >
        {otp.map((item, index) => (
          <input
            key={index}
            ref={(ref) => (refs.current[index] = ref)}
            className={cn(
              'h-14 w-full max-w-[3.5rem] flex-1 rounded border bg-inherit text-center text-lg font-semibold transition-colors',
              error
                ? 'border-error hover:border-error-600'
                : 'border-gray hover:border-gray-700 active:border-primary',
            )}
            onChange={(ev) => handleChange(ev, index)}
            onPaste={handlePaste}
            value={otp[index]}
            maxLength={1}
            name={`otp[${index}]`}
          />
        ))}
      </div>
    )
  },
)

OTPInput.displayName = 'OTPInput'

export default OTPInput
