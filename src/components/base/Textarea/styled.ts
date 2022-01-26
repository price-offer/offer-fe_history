import styled from '@emotion/styled'
import type { StyledTextareaProps } from './types'
import { FONT_GRAY, BORDER } from '@utils/constant'

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: ${({ width }): string => (width ? width : '100%')};
  height: ${({ height }): string => (height ? height : '100%')};
  padding: 5px 10px;
  border: ${BORDER} 1px solid;
  font-size: ${({ fontSize }): string => (fontSize ? `${fontSize}px` : '16px')};
  line-height: ${({ lineHeight }): string | undefined =>
    lineHeight ? `${lineHeight}px` : undefined};
  font-family: inherit;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${FONT_GRAY};
  }
`
export { StyledTextarea }
