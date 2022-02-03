import type { HTMLAttributes } from 'react'

type directionType = 'vertical' | 'horizontal'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction: directionType
  gap?: string
  size?: string
  color?: string
}

export type { DividerProps, directionType }
