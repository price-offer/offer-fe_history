import Text from '@components/base/Text'
import { BLACK, FONT_SIZE } from '@constants'
import type { TextProps } from '@base/Text/types'
import type { ReactElement } from 'react'
import type { IStory } from '@models'

export default {
  title: 'Components/Base/Text',
  component: Text,
  argTypes: {
    children: { defaultValue: 'Text', control: 'text' },
    color: { defaultValue: BLACK, control: 'color' },
    block: { defaultValue: false, control: 'boolean' },
    fontSize: {
      defaultValue: 'SM',
      options: [...Object.keys(FONT_SIZE)],
      control: { type: 'inline-radio' }
    },
    strong: { defaultValue: false, control: 'boolean' },
    underline: { defaultValue: false, control: 'boolean' },
    theme: {
      defaultValue: 'primary',
      options: ['primary', 'message', 'selected'],
      control: 'inline-radio'
    }
  }
}

const Template: IStory<TextProps> = args => <Text {...args} />

export const Primary = Template.bind({}) as IStory<TextProps>
Primary.args = {
  children: '상품 이름',
  fontSize: 'SM',
  theme: 'primary'
}

export const Selected = Template.bind({}) as IStory<TextProps>
Selected.args = {
  children: '판매 상품',
  fontSize: 'LG',
  strong: true,
  theme: 'selected'
}

export const Message = Template.bind({}) as IStory<TextProps>
Message.args = {
  children: '물건 팔렸나요?',
  fontSize: 'SM',
  theme: 'message'
}
