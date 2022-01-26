import type { ReactElement } from 'react'
import type { TextareaProps } from './types'
import { StyledTextarea } from './styled'

const Textarea = ({
  children,
  width,
  height,
  fontSize,
  maxLength,
  lineHeight,
  ...props
}: TextareaProps): ReactElement => {
  return (
    <StyledTextarea
      fontSize={fontSize}
      height={height}
      lineHeight={lineHeight}
      maxLength={maxLength}
      width={width}
      {...props}>
      {children}
    </StyledTextarea>
  )
}

export default Textarea
