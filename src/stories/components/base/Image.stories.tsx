import type { ReactElement } from "react"
import Image from "@base/Image"
import type { ImageProps } from '@base/Image/types'
import { NO_IMAGE_USER, NO_IMAGE_SQUARE, NO_IMAGE_RECTANGLE_H, NO_IMAGE_RECTANGLE_W  } from '@constants'

export default {
  title: 'Component/Base/Image',
  component: Image,
  argTypes: {
    lazy: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', require: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
    placeholder: {
      defaultValue: 'square',
      options: ['user','square','rectangleW','rectangleH'],
      control: { type: 'inline-radio' },
    },
    threshold: {
      type: { name: 'number' },
      defaultValue: 0.2,
      control: { type: 'number' },
    },
    alt: {
      control: 'string',
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  }
}

export const User = ({ src= 'https://picsum.photos/200', ...props }: ImageProps): ReactElement => (
  <>
    {Array.from({length: 10}).map((_, idx) =>
      <Image
        key={idx}
        height={200}
        src={src}
        width={200}
        {...props}
        block
        placeholder={NO_IMAGE_USER}/>)}
  </>
)

export const Square = ({ src= 'https://picsum.photos/200', ...props }: ImageProps): ReactElement => (
  <>
    {Array.from({length: 10}).map((_, idx) =>
      <Image
        key={idx}
        height={200}
        src={src}
        width={200}
        {...props}
        block
        placeholder={NO_IMAGE_SQUARE}/>)}
  </>
)

export const RectangleW = ({ src= 'https://picsum.photos/400', ...props }: ImageProps): ReactElement => (
  <>
    {Array.from({length: 10}).map((_, idx) =>
      <Image
        key={idx}
        height={200}
        src={src}
        width={400}
        {...props}
        block
        placeholder={NO_IMAGE_RECTANGLE_W}/>)}
  </>
)


export const RectangleH = ({ src= 'https://picsum.photos/200', ...props }: ImageProps): ReactElement => (
  <>
    {Array.from({length: 10}).map((_, idx) =>
      <Image
        key={idx}
        height={400}
        src={src}
        width={200}
        {...props}
        block
        placeholder={NO_IMAGE_RECTANGLE_H}/>)}
  </>
)

