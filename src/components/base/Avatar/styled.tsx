import styled from '@emotion/styled'
import type { StyledAvatarWrapperProps } from './types'
import { BORDER } from '@constants'

const AvatarWrapper = styled.div<StyledAvatarWrapperProps>`
  display: inline-block;
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
  border: 1px solid ${BORDER};
  border-radius: 100%;
  overflow: hidden;
`

export default AvatarWrapper
