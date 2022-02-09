import type { ReactElement } from 'react'
import { StyledText } from './styled'
import type { TextProps } from './types'

const Text = ({
  children,
  fontSize = 'NORMAL',
  tag = 'span',
  color,
  strong,
  underline,
  theme = 'primary',
  ...props
}: TextProps): ReactElement => (
  <StyledText
    as={tag}
    color={color}
    fontSize={fontSize}
    strong={strong}
    theme={theme}
    underline={underline}
    {...props}>
    {children}
  </StyledText>
)

export default Text
