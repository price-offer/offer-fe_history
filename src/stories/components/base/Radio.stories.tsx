import Radio from '@base/Radio'
import { FONT_SIZE } from '@constants'
import type { RadioProps } from '@base/Radio/types'
import type { IStory } from '@data/models'
import type { ReactElement } from 'react'

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
      defaultValue: '14px',
      control: 'text'
    },
    fontSize: {
      defaultValue: 'NORMAL',
      options: [...Object.keys(FONT_SIZE)],
      control: 'inline-radio'
    }
  }
}

const Template = (args: RadioProps): ReactElement => <Radio {...args} />

export const VerticalRadio = Template.bind({}) as IStory<RadioProps>
VerticalRadio.args = {
  radioItemList: DUMMY_DATA,
  direction: 'vertical',
  radioName: 'tradeMethod'
}

export const HorizontalRadio = Template.bind({}) as IStory<RadioProps>
HorizontalRadio.args = {
  radioItemList: DUMMY_DATA,
  direction: 'horizontal',
  radioName: 'tradeMethod'
}
