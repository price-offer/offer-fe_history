import type { ReactElement } from 'react'
import type { SelectProps } from './type'
import { StyledSelect } from './styled'

const Select = ({
  selectItemList,
  defaultItem,
  width = '100px',
  height = '30px',
  fontSize = 'XXXS',
  ...props
}: SelectProps): ReactElement => (
  <StyledSelect fontSize={fontSize} height={height} width={width} {...props}>
    <option disabled hidden selected value={defaultItem.code}>
      {defaultItem.name}
    </option>
    {selectItemList?.map(item => (
      <option key={item.code} value={item.code}>
        {item.name}
      </option>
    ))}
  </StyledSelect>
)

export default Select
