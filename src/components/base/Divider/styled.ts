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
          width: `${size ? size : '350px'}`,
          display: 'block',
          height: '1px',
          margin: gap ? `${gap} 0` : '10px 0'
        }
      : {
          position: 'relative',
          top: '-1px',
          display: 'inline-block',
          width: '1px',
          height: `${size ? size : '15px'}`,
          verticalAlign: 'middle',
          margin: gap ? `0 ${gap}` : '0 10px'
        }};
`

export { StyledDivider }
