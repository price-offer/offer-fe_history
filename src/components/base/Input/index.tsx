import type { ReactElement } from 'react'
import React from 'react'
import type { InputProps } from './types'
import { StyledInput } from './styled'

const Input = ({
  type = 'text',
  width = '100%',
  height = '30px',
  fontSize,
  maxLength,
  round,
  ...props
}: InputProps): ReactElement => (
  <StyledInput
    fontSize={fontSize}
    height={height}
    maxLength={maxLength}
    round={round}
    type={type}
    width={width}
    {...props}
  />
)

export default Input
