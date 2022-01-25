import type { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  width?: number | string
  height?: number | string
}

type StyledAvatarWrapperProps = Pick<AvatarProps, 'width' | 'height'>

export type { AvatarProps, StyledAvatarWrapperProps }
