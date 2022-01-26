import Text from '@components/base/Text'
import type { TextProps } from '@base/Text/types'
import { FONT_GRAY, PRIMARY } from '@utils/constant'
import type { ReactElement } from 'react'
import type { IStory } from '@models'

export default {
  title: 'Component/Base/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    fontColor: { control: 'text' },
    block: { control: 'boolean' },
    fontSize: { control: 'text' },
    strong: { control: 'boolean' },
    textBackground: { control: 'string' },
    underline: { control: 'boolean' }
  }
}

const Template = (args: TextProps): ReactElement => <Text {...args} />

export const SignUp = Template.bind({}) as IStory<TextProps>
SignUp.args = {
  children: '회원 가입',
  fontColor: FONT_GRAY,
  fontSize: 14,
  underline: true,
  clickable: true
}

export const ProfileList = Template.bind({}) as IStory<TextProps>
ProfileList.args = {
  children: '판매 상품',
  fontSize: 20,
  strong: true,
  clickable: true,
  textBackground:
    'linear-gradient( 180deg ,rgba(255,255,255,0) 50%,rgba(247,80,42,.254902) 0)'
}

const messageStyle = {
  padding: '10px 15px',
  borderRadius: '20px'
}

export const Message = Template.bind({}) as IStory<TextProps>
Message.args = {
  children: '물건 팔렸나요?',
  fontColor: '#fff',
  style: messageStyle,
  textBackground: PRIMARY
}
