import styled from '@emotion/styled'
import type { StyledDIMProps, StyledContainerProps } from './types'

const StyledBackgroundDIM = styled.div<StyledDIMProps>`
  display: ${({ visible }): string => (visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`

const StyledModalContainer = styled.div<StyledContainerProps>`
  position: fixed;
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
  min-width: 350px;
  max-width: 400px;
  padding: 60px 40px 50px 40px;
  background-color: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
`
export { StyledBackgroundDIM, StyledModalContainer }
