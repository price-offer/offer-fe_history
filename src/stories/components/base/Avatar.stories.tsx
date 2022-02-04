import Avatar from '@base/Avatar'
import type { AvatarProps } from '@base/Avatar/types'
import type { IStory } from '@models'

export default {
  title: 'Components/Base/Avatar',
  component: Avatar,
  argTypes: {
    width: {
      defaultValue: 100,
      control: { type: 'number' }
    },
    height: {
      defaultValue: 100,
      control: { type: 'number' }
    },
    src: {
      defaultValue: 'https://picsum.photos/100'
    }
  }
}

const Template: IStory<AvatarProps> = args => <Avatar {...args} />

export const NoUser = Template.bind({})
NoUser.args = {
  src: '',
  width: 50,
  height: 50
}

export const User = Template.bind({})
User.args = {
  src: 'https://picsum.photos/50',
  width: 50,
  height: 50
}
