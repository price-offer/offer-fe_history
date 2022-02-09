import Input from '@base/Input'
import type { InputProps } from '@base/Input/types'
import type { IStory } from '@data/models'
import { FONT_SIZE } from '@constants'

export default {
  title: 'Components/Base/Input',
  component: Input,
  argTypes: {
    type: { defaultValue: 'text', control: 'inline-radio' },
    width: { defaultValue: '100%', control: 'text' },
    height: { defaultValue: '40px', control: 'text' },
    round: { defaultValue: false, controle: 'boolean' },
    fontSize: {
      defaultValue: 'XXS',
      options: [...Object.keys(FONT_SIZE)],
      control: { type: 'inline-radio' }
    },
    maxLength: { control: 'number' }
  }
}

const Template: IStory<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  maxLength: 50,
  height: 30,
  fontSize: 'SM',
  placeholder: '상품명으로 원하는 물건을 검색해보세요!'
}

export const Round = Template.bind({})
Round.args = {
  type: 'text',
  height: 30,
  placeholder: '상품명으로 원하는 물건을 검색해보세요!',
  round: true
}
