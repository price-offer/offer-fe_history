import type { ReactElement, SyntheticEvent } from 'react'
import type { ImagePlaceholerType, ImageProps } from './types'
import { useRef, useEffect, useState, useCallback } from 'react'
import StyledImg from './styled'
import {
  NO_IMAGE_USER_IMG,
  NO_IMAGE_SQUARE_IMG,
  NO_IMAGE_PRODUCT_IMG,
  NO_IMAGE_RECTANGLE_W_IMG,
  NO_IMAGE_RECTANGLE_H_IMG
} from '@constants'

const LOAD_IMG_EVENT = 'loadImage'
const DEFAULT_THRESHOLD = 0.2

let observer: IntersectionObserver | null = null

const onIntersection = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
): void => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT))
    }
  })
}

const convertPlaceholderToImg = (placeholder: ImagePlaceholerType): string => {
  switch (placeholder) {
    case 'user':
      return NO_IMAGE_USER_IMG
    case 'product':
      return NO_IMAGE_PRODUCT_IMG
    case 'square':
      return NO_IMAGE_SQUARE_IMG
    case 'rectangleW':
      return NO_IMAGE_RECTANGLE_W_IMG
    case 'rectangleH':
      return NO_IMAGE_RECTANGLE_H_IMG
  }
}

const Image = ({
  lazy = true,
  src,
  width,
  height,
  mode = 'cover',
  border = true,
  block = false,
  placeholder = 'square',
  threshold = DEFAULT_THRESHOLD,
  ...props
}: ImageProps): ReactElement => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const handleError = useCallback(
    (e: SyntheticEvent<HTMLImageElement>): void => {
      const imgPath = convertPlaceholderToImg(placeholder)
      e.currentTarget.src = imgPath
    },
    [placeholder]
  )

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImg = (): void => {
      setLoaded(true)
    }

    const imgElement = imgRef.current
    imgElement?.addEventListener(LOAD_IMG_EVENT, handleLoadImg)

    return (): void => {
      imgElement?.removeEventListener(LOAD_IMG_EVENT, handleLoadImg)
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) {
      return
    }

    observer = new IntersectionObserver(onIntersection, { threshold })
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  return (
    <StyledImg
      ref={imgRef}
      block={block}
      border={border}
      height={height}
      mode={mode}
      src={loaded ? src : convertPlaceholderToImg(placeholder)}
      width={width}
      onError={handleError}
      {...props}
    />
  )
}

export default Image
