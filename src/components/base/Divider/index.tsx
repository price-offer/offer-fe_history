import type { ReactElement } from 'react'
import StyledDivider from './styled'
import type { DividerProps } from './types'

const Divider = ({
  color,
  direction = 'vertical',
  gap = '10px',
  size = '14px',
  ...props
}: DividerProps): ReactElement => (
  <StyledDivider
    color={color}
    direction={direction}
    gap={gap}
    size={size}
    {...props}
  />
)

export default Divider
