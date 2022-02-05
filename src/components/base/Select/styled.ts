import styled from '@emotion/styled'
import type { StyledSelectProps } from './type'
import { FONT_SIZE, WHITE_GRAY, DARK_GRAY, PRIMARY } from '@constants'

const StyledSelect = styled.select<StyledSelectProps>`
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
  border: 1px solid ${WHITE_GRAY};
  color: ${DARK_GRAY};
  font-size: ${({ fontSize = 'NORMAL' }): string => FONT_SIZE[fontSize]};
  cursor: pointer;

  &:select {
    background-color: ${PRIMARY};
  }
`

export { StyledSelect }
