import type { HTMLAttributes } from 'react'

type directionType = 'vertical' | 'horizontal'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction: directionType
  gap?: string | number
  size?: string | number
  color?: string
}

export type { DividerProps }
