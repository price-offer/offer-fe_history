import type { InputHTMLAttributes } from 'react'
import type { FONT_SIZE } from '@constants'

type inputType = 'text' | 'checkbox' | 'number'
type TextFontSizeKeys = keyof typeof FONT_SIZE

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: inputType
  round?: boolean
  width?: number | string
  height?: number | string
  fontSize?: TextFontSizeKeys
  maxLength?: number
}

type StyledInputProps = Omit<InputProps, 'type' | 'maxLength'>

export type { InputProps, StyledInputProps }
