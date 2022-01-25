import type { ReactElement } from 'react'
import type { AvatarProps } from './types'
import AvatarWrapper from './styled'
import Image from '@base/Image'
import { NO_IMAGE_USER } from '@constants'

const Avatar = ({
  src,
  width,
  height,
  ...props
}: AvatarProps): ReactElement => {
  return (
    <AvatarWrapper height={height} width={width} {...props}>
      <Image
        alt="avatar"
        height={height}
        mode="cover"
        placeholder={NO_IMAGE_USER}
        src={src || NO_IMAGE_USER}
        type="user"
        width={width}
      />
    </AvatarWrapper>
  )
}

export default Avatar
