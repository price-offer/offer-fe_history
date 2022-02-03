import type { HTMLAttributes } from 'react'
import type { FONT_SIZE } from '@constants'

type TextFontSizeKeys = keyof typeof FONT_SIZE

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  children?: number | string
  width?: number | string
  height?: number | string
  fontSize?: TextFontSizeKeys
  maxLength?: number
}

type StyledTextareaProps = Omit<TextareaProps, 'children' | 'maxLength'>

export type { TextareaProps, StyledTextareaProps }
