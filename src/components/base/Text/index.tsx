import type { ReactElement } from 'react'
import { StyledText } from './styled'
import type { TextProps } from './types'

const Text = ({
  children,
  fontSize,
  fontColor,
  strong,
  block,
  underline,
  clickable,
  textBackground,
  ...props
}: TextProps): ReactElement => {
  return (
    <StyledText
      block={block}
      clickable={clickable}
      fontColor={fontColor}
      fontSize={fontSize}
      strong={strong}
      textBackground={textBackground}
      underline={underline}
      {...props}>
      {children}
    </StyledText>
  )
}

export default Text
