import Select from '@base/Select'
import type { SelectProps } from '@base/Select/type'
import type { IStory } from '@data/models'
import { FONT_SIZE } from '@constants'

export default {
  title: 'Components/base/Select',
  component: Select,
  argTypes: {
    selectItemList: { control: 'text' },
    defaultItem: { control: 'text' },
    width: { defaultValue: '100px', control: 'text' },
    height: { defaultValue: '30px', control: 'text' },
    fontSize: {
      defaultValue: 'XXXS',
      options: [...Object.keys(FONT_SIZE)],
      control: 'inline-radio'
    }
  }
}

const DUMMY_DATA = [
  {
    code: 1,
    name: '인기 매물'
  },
  {
    code: 2,
    name: '디지털 기기'
  },
  {
    code: 3,
    name: '생활 가전'
  }
]

const DEFAULT_DATA = {
  code: 0,
  name: '선택하세요.'
}

export const Default: IStory<SelectProps> = args => (
  <Select {...args} defaultItem={DEFAULT_DATA} selectItemList={DUMMY_DATA} />
)
