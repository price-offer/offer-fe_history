import styled from '@emotion/styled'
import type { styledDialogProps, dialogItemListType } from './types'
import { FONT_SIZE, BLACK, WHITE, WHITE_GRAY } from '@constants'

const applyStyleDialogItem = (dialogItemList: dialogItemListType): string => {
  if (dialogItemList.length > 2) {
    return `&:not(:first-of-type, :last-child) {
      padding: 20px 0;
    }`
  }

  if (dialogItemList.length === 2) {
    return `&:last-child {
      padding-top: 20px;
    }`
  }

  return ''
}

const StyledDialogWrapper = styled.ul<styledDialogProps>`
  display: ${({ visible }): string => (visible ? 'block' : 'none')};
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
    ${({ dialogItemList }): string => applyStyleDialogItem(dialogItemList)}

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
