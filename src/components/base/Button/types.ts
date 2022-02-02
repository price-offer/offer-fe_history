import type { ButtonHTMLAttributes } from 'react'
import type { FONT_SIZE } from '@constants'

type ButtonType = 'button' | 'submit'
type ButtonTheme =
  | 'primary'
  | 'disabled'
  | 'kakao'
  | 'line-primary'
  | 'line-black'
  | 'line-gray'
type ButtonFontSizeKeys = keyof typeof FONT_SIZE

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType
  width?: string | number
  height?: string | number
  theme: ButtonTheme
  fontSize?: ButtonFontSizeKeys
  strong?: boolean
}

type styledButtonProps = Pick<
  ButtonProps,
  'theme' | 'width' | 'height' | 'fontSize' | 'strong'
>

export type { ButtonProps, ButtonTheme, styledButtonProps }
