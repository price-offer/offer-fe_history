import Image from '@base/Image'
import type { ImageProps } from '@base/Image/types'
import type { IStory } from '@models'

export default {
  title: 'Components/Base/Image',
  component: Image,
  argTypes: {
    border: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
    lazy: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
    src: {
      type: { name: 'string', require: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' }
    },
    threshold: {
      type: { name: 'number' },
      defaultValue: 0.2,
      control: { type: 'number' }
    },
    alt: {
      control: 'string'
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' }
    },
    placeholder: {
      defaultValue: 'product',
      options: ['user', 'product', 'square', 'rectangleW', 'rectangleH'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template: IStory<ImageProps> = args => (
  <>
    {Array.from({ length: 10 }).map((_, idx) => (
      <Image key={idx} {...args} />
    ))}
  </>
)

export const User = Template.bind({})
User.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  placeholder: 'user',
  width: 200,
  height: 200,
  block: true
}

export const Product = Template.bind({})
Product.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  placeholder: 'product',
  width: 235,
  height: 280,
  block: true
}

export const Square = Template.bind({})
Square.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  placeholder: 'square',
  width: 200,
  height: 200,
  block: true
}

export const RectangleW = Template.bind({})
RectangleW.args = {
  src: 'https://picsum.photos/400',
  mode: 'cover',
  placeholder: 'rectangleW',
  width: 400,
  height: 200,
  block: true
}

export const RectangleH = Template.bind({})
RectangleH.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  placeholder: 'rectangleH',
  width: 200,
  height: 400,
  block: true
}
