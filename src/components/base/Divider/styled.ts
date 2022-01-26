import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'
import type { DividerProps } from './types'
import { BORDER } from '@utils/constant'

const StyledDivider = styled.hr<DividerProps>`
  border: none;
  background-color: ${BORDER};

  ${({ type, marginSize, borderSize, lineThickness }): CSSObject =>
    type === 'horizontal'
      ? {
          width: `${borderSize ? borderSize : '350px'}`,
          display: 'block',
          height: lineThickness ? `${lineThickness}px` : '1px',
          margin: marginSize ? `${marginSize} 0` : '10px 0'
        }
      : {
          position: 'relative',
          top: '-1px',
          display: 'inline-block',
          width: lineThickness ? `${lineThickness}px` : '1px',
          height: `${borderSize ? borderSize : '15px'}`,
          verticalAlign: 'middle',
          margin: marginSize ? `0 ${marginSize}` : '0 10px'
        }}
`

export { StyledDivider }
