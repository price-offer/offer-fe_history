import type { ImgHTMLAttributes } from 'react'

type ImageMode = 'cover' | 'fill' | 'contain'
type ImageType = 'user' | 'product' | 'square' | 'rectangleW' | 'rectangleH'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean
  width?: number | string
  height?: number | string
  mode: ImageMode
  type: ImageType
  block?: boolean
  border?: boolean
  placeholder?: string
  threshold?: number
}

type StyledImgProps = Pick<
  ImageProps,
  'width' | 'height' | 'mode' | 'block' | 'border'
>

export type { ImageMode, ImageType, ImageProps, StyledImgProps }
