import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'
import type { DividerProps, directionType } from './types'
import { WHITE_GRAY } from '@constants'

const StyledDivider = styled.hr<DividerProps>`
  border: none;
  background-color: ${({ color }): string => (color ? color : WHITE_GRAY)};

  ${({ direction, size, gap }): CSSObject =>
    direction === 'horizontal'
      ? {
          display: 'block',
          width: typeof size === 'string' ? size : `${size}px`,
          height: '1px',
          margin: typeof gap === 'string' ? `${gap} 0` : `${gap}px 0`
        }
      : {
          display: 'inline-block',
          position: 'relative',
          top: '-1px',
          width: '1px',
          height: typeof size === 'string' ? size : `${size}px`,
          margin: typeof gap === 'string' ? `0 ${gap}` : `0 ${gap}px`,
          verticalAlign: 'middle'
        }};
`

export { StyledDivider }
