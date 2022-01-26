import styled from '@emotion/styled'
import type { StyledTextProps } from './types'
import { FONT } from '@utils/constant'

const StyledText = styled.span<StyledTextProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline')};
  background: ${({ textBackground }): string | undefined =>
    textBackground ? textBackground : undefined};
  color: ${({ fontColor }): string => (fontColor ? fontColor : FONT)};
  font-size: ${({ fontSize }): string => (fontSize ? `${fontSize}px` : '16px')};
  font-weight: ${({ strong }): string => (strong ? 'bold' : 'undefined')};
  text-decoration: ${({ underline }): string | undefined =>
    underline ? 'underline' : undefined};
  cursor: ${({ clickable }): string | undefined =>
    clickable ? 'pointer' : undefined};
`

export { StyledText }
