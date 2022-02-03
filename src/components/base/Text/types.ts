import type { HTMLAttributes } from 'react'
import type { FONT_SIZE } from '@constants'

type TextTheme = 'primary' | 'message' | 'selected'
type TextFontSizeKeys = keyof typeof FONT_SIZE

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: string | number
  fontSize?: TextFontSizeKeys
  color?: string
  strong?: boolean
  block?: boolean
  underline?: boolean
  theme: TextTheme
}

type StyledTextProps = Omit<TextProps, 'children'>

export type { TextProps, StyledTextProps, TextTheme }
