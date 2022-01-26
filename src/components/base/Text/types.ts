import type { HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: string | number
  fontSize?: number
  fontColor?: string
  strong?: boolean
  block?: boolean
  underline?: boolean
  clickable?: boolean
  textBackground?: string
}

type StyledTextProps = Omit<TextProps, 'children'>

export type { TextProps, StyledTextProps }
