import Text from '@components/base/Text'
import type { TextProps } from '@base/Text/types'
import type { IStory } from '@models'
import { BLACK, FONT_SIZE, PRIMARY } from '@constants'

export default {
  title: 'Components/Base/Text',
  component: Text,
  argTypes: {
    children: { defaultValue: 'Text', control: 'text' },
    tag: {
      defaultValue: 'span',
      options: ['span', 'p'],
      control: 'inline-radio'
    },
    color: { defaultValue: BLACK, control: 'color' },
    block: { defaultValue: false, control: 'boolean' },
    fontSize: {
      defaultValue: 'NORMAL',
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

export const PrimarySpanTag = Template.bind({})
PrimarySpanTag.args = {
  children: '신규상품',
  fontSize: 'XXL',
  strong: true,
  theme: 'primary'
}

export const PrimaryPTag = Template.bind({})
PrimaryPTag.args = {
  children: '* 상품 이미지는 640x640에 최적화 되어 있습니다.',
  tag: 'p',
  fontSize: 'SM',
  theme: 'primary',
  color: PRIMARY
}

export const Selected = Template.bind({})
Selected.args = {
  children: '판매 상품',
  fontSize: 'LG',
  strong: true,
  theme: 'selected'
}

export const Message = Template.bind({})
Message.args = {
  children: '물건 팔렸나요?',
  theme: 'message'
}
