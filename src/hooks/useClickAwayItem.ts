import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

type onCloseType = () => void

const useClickAwayItem = <RefType extends HTMLElement>(
  onClose: onCloseType
): RefObject<RefType> => {
  const ref = useRef<RefType>(null)

  const handleClickAway: EventListener = e => {
    const target = e.target as HTMLElement
    const dialogElement = ref.current

    if (!dialogElement) {
      return
    }

    !dialogElement.contains(target) && onClose()
  }

  useEffect(() => {
    document.addEventListener('click', e => {
      handleClickAway(e)
    })

    return () => {
      document.removeEventListener('click', e => {
        handleClickAway(e)
      })
    }
  }, [])

  return ref
}

export default useClickAwayItem
