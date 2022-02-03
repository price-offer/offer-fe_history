import styled from '@emotion/styled'
import type { StyledInputProps } from './types'
import { DARK_GRAY, WHITE_GRAY, FONT_SIZE } from '@constants'

const StyledInput = styled.input<StyledInputProps>`
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid ${WHITE_GRAY};
  border-radius: ${({ round }): string => (round ? '10px' : 'none')};
  font-size: ${({ fontSize = 'SM' }): string => FONT_SIZE[fontSize]};

  &::placeholder {
    color: ${DARK_GRAY};
  }
`
export { StyledInput }
