import type { ImgHTMLAttributes } from 'react'

type ImageMode = 'cover' | 'fill' | 'contain'
type ImagePlaceholerType =
  | 'user'
  | 'product'
  | 'square'
  | 'rectangleW'
  | 'rectangleH'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean
  width?: number | string
  height?: number | string
  mode: ImageMode
  block?: boolean
  border?: boolean
  placeholder?: ImagePlaceholerType
  threshold?: number
}

type StyledImgProps = Pick<
  ImageProps,
  'width' | 'height' | 'mode' | 'block' | 'border'
>

export type { ImageMode, ImagePlaceholerType, ImageProps, StyledImgProps }
