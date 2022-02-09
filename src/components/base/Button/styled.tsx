import styled from '@emotion/styled'
import {
  FONT_SIZE,
  KAKAO,
  PRIMARY,
  BLACK,
  WHITE,
  DARK_GRAY,
  WHITE_GRAY,
  MEDIUM_GRAY,
  FONT_KAKAO
} from '@constants'
import type { ButtonTheme, styledButtonProps } from './types'

const applyThemeStyle = (theme: ButtonTheme): string => {
  switch (theme) {
    case 'disabled':
      return `
        cursor: default;
        color: ${WHITE};
        border: none;
        background-color: ${MEDIUM_GRAY};
      `
    case 'kakao':
      return `
        color: ${FONT_KAKAO};
        border: none;
        background-color: ${KAKAO};
      `
    case 'line-primary':
      return `
        color: ${PRIMARY};
        border: 1px solid;
        background-color: ${WHITE};
      `
    case 'line-black':
      return `
        color: ${BLACK};
        border: 1px solid;
        background-color: ${WHITE};
      `
    case 'line-gray':
      return `
        color: ${DARK_GRAY};
        border: 1px solid ${WHITE_GRAY};
        background-color: ${WHITE};
      `
    case 'line-none':
      return `
        color: ${BLACK};
        border:none;
        background-color:transparent;
        `
    default:
      return `
        color: ${WHITE};
        border: none;
        background-color: ${PRIMARY};
      `
  }
}

const StyledButton = styled.button<styledButtonProps>`
  cursor: pointer;
  user-select: none;
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
  border-radius: 3px;
  font-size: ${({ fontSize = 'SM' }): string => FONT_SIZE[fontSize]};
  font-weight: ${({ strong }): number => (strong ? 600 : 400)};
  ${({ theme }): string => applyThemeStyle(theme)};
`

export default StyledButton
