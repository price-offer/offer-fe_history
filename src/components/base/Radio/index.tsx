import type { ReactElement } from 'react'
import type { RadioProps } from './types'
import { StyledForm, StyledInput, StyledLabel } from './styled'

export const Radio = ({
  radioItemList,
  direction,
  radioName,
  radioSize,
  fontSize,
  ...props
}: RadioProps): ReactElement => (
  <StyledForm direction={direction}>
    {radioItemList?.map(
      ({ code, name }): ReactElement => (
        <StyledLabel key={code} fontSize={fontSize} htmlFor={`${code}${name}`}>
          <StyledInput
            id={`${code}${name}`}
            name={radioName}
            radioSize={radioSize}
            type="radio"
            value={code}
            {...props}
          />
          {name}
        </StyledLabel>
      )
    )}
  </StyledForm>
)

export default Radio
