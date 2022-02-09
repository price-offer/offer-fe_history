import type { HTMLAttributes } from 'react'
import type { FONT_SIZE } from '@constants'

type TextTheme = 'primary' | 'message' | 'selected'
type TextFontSizeKeys = keyof typeof FONT_SIZE
type TextTag = 'span' | 'p'

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: string | number
  fontSize?: TextFontSizeKeys
  tag?: TextTag
  color?: string
  strong?: boolean
  underline?: boolean
  theme: TextTheme
}

type StyledTextProps = Omit<TextProps, 'children' | 'tag'>

export type { TextProps, StyledTextProps, TextTheme }
