import Divider from '@components/base/Divider'
import type { DividerProps } from '@base/Divider/types'
import type { IStory } from '@models'
import { WHITE_GRAY } from '@constants'

export default {
  title: 'Components/Base/Divider',
  component: Divider,
  argTypes: {
    direction: {
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' }
    },
    gap: {
      defaultValue: '13px',
      control: 'text'
    },
    size: {
      defaultValue: '14px',
      control: 'text'
    },
    color: {
      defaultValue: WHITE_GRAY,
      control: 'color'
    }
  }
}

const Template: IStory<DividerProps> = args => (
  <>
    <span>Text</span>
    <Divider {...args} />
    <span>Text</span>
  </>
)

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'vertical',
  gap: '10px',
  color: WHITE_GRAY
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'horizontal',
  gap: '10px',
  size: '100%',
  color: WHITE_GRAY
}
