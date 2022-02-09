import styled from '@emotion/styled'
import type { StyledTextareaProps } from './types'
import { DARK_GRAY, WHITE_GRAY, FONT_SIZE } from '@constants'

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
  padding: 5px 10px;
  box-sizing: border-box;
  border: ${WHITE_GRAY} 1px solid;
  font-size: ${({ fontSize = 'LG' }): string => FONT_SIZE[fontSize]};
  font-family: inherit;
  resize: none;

  &::placeholder {
    color: ${DARK_GRAY};
  }
`
export { StyledTextarea }
