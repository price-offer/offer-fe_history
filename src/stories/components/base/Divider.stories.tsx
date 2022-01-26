import Divider from '@components/base/Divider'
import type { DividerProps } from '@base/Divider/types'
import type { ReactElement } from 'react'
import type { IStory } from '@models'

export default {
  title: 'Component/Base/Divider',
  component: Divider,
  argTypes: {
    type: {
      defaultValue: 'vertical',
      control: 'text'
    },
    marginSize: {
      defaultValue: '30px',
      control: 'text'
    },
    borderSize: {
      defaultValue: '20px',
      control: 'text'
    },
    lineThickness: {
      defaultValue: 1,
      control: 'number'
    }
  }
}

const Template = (args: DividerProps): ReactElement => (
  <>
    <span>Text</span>
    <Divider type="vertical" {...args} />
    <span>Text</span>
  </>
)

export const Vertical = Template.bind({}) as IStory<DividerProps>
Vertical.args = {
  type: 'vertical',
  marginSize: '10px',
  borderSize: '12px',
  lineThickness: 1
}

export const Horizontal = Template.bind({}) as IStory<DividerProps>
Horizontal.args = {
  type: 'horizontal',
  marginSize: '20px',
  borderSize: '350px',
  lineThickness: 1
}
