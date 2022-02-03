import { FONT_SIZE } from '@constants'
import styled from '@emotion/styled'
import type { StyledRadioProps } from './types'

const StyledForm = styled.form<StyledRadioProps>`
  display: flex;
  flex-direction: ${({ direction }): string =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: 20px;
`

const StyledInput = styled.input<StyledRadioProps>`
  width: ${({ size }): string =>
    typeof size === 'string' ? size : `${size}px`};
  height: ${({ size }): string =>
    typeof size === 'string' ? size : `${size}px`};
  font-size: ${({ size }): string =>
    typeof size === 'string' ? size : `${size}px`};
  cursor: pointer;
`

const StyledLabel = styled.label<StyledRadioProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: ${({ fontSize = 'NORMAL' }): string => FONT_SIZE[fontSize]};
`

export { StyledForm, StyledInput, StyledLabel }
