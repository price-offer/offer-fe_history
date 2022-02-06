import type { ReactElement } from 'react'
import StyledButton from './styled'
import type { ButtonProps } from './types'

const Button = ({
  type = 'button',
  width = '215px',
  height = '50px',
  theme = 'primary',
  fontSize = 'SM',
  strong = true,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      disabled={theme === 'disabled'}
      fontSize={fontSize}
      height={height}
      strong={strong}
      theme={theme}
      type={type}
      width={width}
      {...props}
    />
  )
}

export default Button
