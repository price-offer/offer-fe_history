import type { ReactElement } from 'react'
import { StyledText } from './styled'
import type { TextProps } from './types'

const Text = ({
  children,
  fontSize,
  color,
  strong,
  block,
  underline,
  theme = 'primary',
  ...props
}: TextProps): ReactElement => (
  <StyledText
    block={block}
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
