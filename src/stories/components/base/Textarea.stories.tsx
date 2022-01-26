import Textarea from '@components/base/Textarea'
import type { TextareaProps } from '@base/Textarea/types'
import type { ReactElement } from 'react'
import type { IStory } from '@data/models'

export default {
  title: 'Components/Base/Textarea',
  component: Textarea,
  argTypes: {
    children: { control: 'text' },
    width: { defaultValue: '100%', control: 'text' },
    height: { defaultValue: '350px', control: 'text' },
    fontSize: { defaultValue: 16, control: 'number' },
    placeholder: { defaultValue: '내용을 입력해 주세요.', control: 'text' },
    maxLength: { control: 'number' }
  }
}

const Template = (args: TextareaProps): ReactElement => <Textarea {...args} />

export const SendMessage = Template.bind({}) as IStory<TextareaProps>
SendMessage.args = {
  height: '80px',
  fontSize: 16,
  placeholder: '메세지를 입력해 주세요.',
  maxLength: 100
}

export const ProductDescription = Template.bind({}) as IStory<TextareaProps>
ProductDescription.args = {
  height: '200px',
  fontSize: 18,
  placeholder: '상품 설명을 입력해 주세요.',
  maxLength: 200
}
