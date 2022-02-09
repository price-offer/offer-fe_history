import Radio from '@base/Radio'
import type { RadioProps } from '@base/Radio/types'
import type { IStory } from '@data/models'
import { FONT_SIZE } from '@constants'

const DUMMY_DATA = [
  {
    code: 1,
    name: '직거래'
  },
  {
    code: 2,
    name: '택배 거래'
  },
  {
    code: 3,
    name: '상관없음'
  }
]

export default {
  title: 'Components/Base/Radio',
  component: Radio,
  argTypes: {
    radioItemList: {
      defaultValue: DUMMY_DATA,
      control: 'text'
    },
    direction: {
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal'],
      control: 'inline-radio'
    },
    radioName: { control: 'text' },
    size: {
      defaultValue: '32px',
      control: 'text'
    },
    fontSize: {
      defaultValue: 'MD',
      options: [...Object.keys(FONT_SIZE)],
      control: 'inline-radio'
    }
  }
}

const Template: IStory<RadioProps> = args => <Radio {...args} />

export const Vertical = Template.bind({})
Vertical.args = {
  radioItemList: DUMMY_DATA,
  direction: 'vertical',
  radioName: 'tradeMethod'
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  radioItemList: DUMMY_DATA,
  direction: 'horizontal',
  radioName: 'tradeMethod'
}
