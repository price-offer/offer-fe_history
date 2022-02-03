import styled from '@emotion/styled'
import type { StyledTextProps, TextTheme } from './types'
import { BLACK, PRIMARY, WHITE, FONT_SIZE } from '@constants'

const applyThemeStyle = (theme: TextTheme): string | undefined => {
  switch (theme) {
    case 'message':
      return `
        padding: 10px 15px;
        background: ${PRIMARY};
        border-radius: 20px;
        color: ${WHITE};
      `
    case 'selected':
      return `
        background:
          linear-gradient( 180deg ,rgba(255,255,255,0) 50%,rgba(247,80,42,.254902) 0);
      `
  }
}

const StyledText = styled.span<StyledTextProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline')};
  color: ${({ color }): string => (color ? color : BLACK)};
  font-size: ${({ fontSize = 'SM' }): string => FONT_SIZE[fontSize]};
  font-weight: ${({ strong }): string => (strong ? 'bold' : 'none')};
  text-decoration: ${({ underline }): string =>
    underline ? 'underline' : 'none'};

  ${({ theme }): string | undefined => applyThemeStyle(theme)}
`

export { StyledText }
