import type { ReactElement } from 'react'
import Image from '@base/Image'
import type { ImageProps } from '@base/Image/types'
import {
  NO_IMAGE_USER,
  NO_IMAGE_SQUARE,
  NO_IMAGE_RECTANGLE_H,
  NO_IMAGE_RECTANGLE_W,
  NO_IMAGE_PRODUCT
} from '@constants'
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
    type: {
      defaultValue: 'product',
      options: ['user', 'product', 'square', 'rectangleW', 'rectangleH'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args: ImageProps): ReactElement => (
  <>
    {Array.from({ length: 10 }).map((_, idx) => (
      <Image key={idx} {...args} />
    ))}
  </>
)

export const User = Template.bind({}) as IStory<ImageProps>
User.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  type: 'user',
  width: 200,
  height: 200,
  block: true,
  placeholder: NO_IMAGE_USER
}

export const Product = Template.bind({}) as IStory<ImageProps>
Product.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  type: 'product',
  width: 235,
  height: 280,
  block: true,
  placeholder: NO_IMAGE_PRODUCT
}

export const Square = Template.bind({}) as IStory<ImageProps>
Square.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  type: 'square',
  width: 200,
  height: 200,
  block: true,
  placeholder: NO_IMAGE_SQUARE
}

export const RectangleW = Template.bind({}) as IStory<ImageProps>
RectangleW.args = {
  src: 'https://picsum.photos/400',
  mode: 'cover',
  type: 'rectangleW',
  width: 400,
  height: 200,
  block: true,
  placeholder: NO_IMAGE_RECTANGLE_W
}

export const RectangleH = Template.bind({}) as IStory<ImageProps>
RectangleH.args = {
  src: 'https://picsum.photos/200',
  mode: 'cover',
  type: 'rectangleH',
  width: 200,
  height: 400,
  block: true,
  placeholder: NO_IMAGE_RECTANGLE_H
}
