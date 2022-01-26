import type { ReactElement } from 'react'
import { StyledDivider } from './styled'
import type { DividerProps } from './types'

export const Divider = ({
  type = 'vertical',
  marginSize,
  borderSize,
  lineThickness,
  ...props
}: DividerProps): ReactElement => {
  return (
    <StyledDivider
      borderSize={borderSize}
      lineThickness={lineThickness}
      marginSize={marginSize}
      type={type}
      {...props}
    />
  )
}

export default Divider
