import type { ReactElement, SyntheticEvent } from 'react'
import type { ImageProps } from './types'
import { useRef, useEffect, useState } from 'react'
import StyledImg from './styled'
import {
  NO_IMAGE_USER,
  NO_IMAGE_SQUARE,
  NO_IMAGE_PRODUCT,
  NO_IMAGE_RECTANGLE_W,
  NO_IMAGE_RECTANGLE_H
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

const Image = ({
  lazy = true,
  src,
  width,
  height,
  alt,
  mode = 'cover',
  type = 'square',
  border = true,
  block = false,
  placeholder,
  threshold = DEFAULT_THRESHOLD,
  ...props
}: ImageProps): ReactElement => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const handleError = (e: SyntheticEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLImageElement

    switch (type) {
      case 'user':
        target.src = NO_IMAGE_USER
        break
      case 'product':
        target.src = NO_IMAGE_PRODUCT
        break
      case 'square':
        target.src = NO_IMAGE_SQUARE
        break
      case 'rectangleW':
        target.src = NO_IMAGE_RECTANGLE_W
        break
      case 'rectangleH':
        target.src = NO_IMAGE_RECTANGLE_H
        break
    }
  }

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImg = (): void => {
      setLoaded(true)
    }

    const imgElement = imgRef.current

    if (imgElement) {
      imgElement?.addEventListener(LOAD_IMG_EVENT, handleLoadImg)
    }

    return (): void => {
      if (imgElement) {
        imgElement?.removeEventListener(LOAD_IMG_EVENT, handleLoadImg)
      }
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
      alt={alt}
      block={block}
      border={border}
      height={height}
      mode={mode}
      src={loaded ? src : placeholder}
      width={width}
      onError={handleError}
      {...props}
    />
  )
}

export default Image
