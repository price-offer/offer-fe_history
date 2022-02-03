import type { ReactElement } from 'react'
import type { TextareaProps } from './types'
import { StyledTextarea } from './styled'

const Textarea = ({
  children,
  width = '100%',
  height = '100px',
  fontSize,
  maxLength,
  ...props
}: TextareaProps): ReactElement => (
  <StyledTextarea
    fontSize={fontSize}
    height={height}
    maxLength={maxLength}
    width={width}
    {...props}>
    {children}
  </StyledTextarea>
)

export default Textarea
