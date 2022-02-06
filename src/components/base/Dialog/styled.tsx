import styled from '@emotion/styled'
import type { styledDialogProps } from './types'
import { FONT_SIZE, BLACK, WHITE, WHITE_GRAY } from '@constants'

const StyledDialogWrapper = styled.ul<styledDialogProps>`
  display: ${({ visible }): string => (visible ? 'flex' : 'none')};
  gap: 20px;
  flex-direction: column;
  position: absolute;
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  padding: 20px;
  list-style: none;
  border: 1px solid ${WHITE_GRAY};
  border-radius: 5px;
  background-color: ${WHITE};

  li {
    text-align: center;

    span {
      cursor: pointer;
      font-size: ${FONT_SIZE.NORMAL};
    }

    a {
      text-decoration: none;
      color: ${BLACK};
      font-size: ${FONT_SIZE.NORMAL};
    }
  }
`

export default StyledDialogWrapper
