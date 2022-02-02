import type { ReactElement } from 'react'
import type { AvatarProps } from './types'
import AvatarWrapper from './styled'
import Image from '@base/Image'
import { NO_IMAGE_USER_IMG } from '@constants'

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
        border={false}
        height={height}
        mode="cover"
        placeholder={NO_IMAGE_USER_IMG}
        src={src || NO_IMAGE_USER_IMG}
        type="user"
        width={width}
      />
    </AvatarWrapper>
  )
}

export default Avatar
