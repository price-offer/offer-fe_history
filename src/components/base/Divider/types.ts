import type { HTMLAttributes } from 'react'

type dividerType = 'vertical' | 'horizontal'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  type: dividerType
  marginSize?: string
  borderSize?: string
  lineThickness?: number
}

export type { DividerProps, dividerType }
