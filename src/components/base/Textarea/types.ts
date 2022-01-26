import type { HTMLAttributes } from 'react'

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  children?: string | number
  width?: string
  height?: string
  fontSize?: number
  maxLength?: number
  lineHeight?: number
}

type StyledTextareaProps = Omit<TextareaProps, 'children' | 'maxLength'>

export type { TextareaProps, StyledTextareaProps }
