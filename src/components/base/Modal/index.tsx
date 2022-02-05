import { useEffect, useMemo } from 'react'
import type { ReactElement } from 'react'
import type { ModalProps } from './types'
import { StyledBackgroundDIM, StyledModalContainer } from './styled'
import useClickAway from '@hooks/useClickAway'
import ReactDOM from 'react-dom'

const Modal = ({
  children,
  width,
  height,
  visible = false,
  onClose,
  ...props
}: ModalProps): ReactElement => {
  const modalRef = useClickAway<HTMLDivElement>(() => {
    onClose?.()
  })

  const topElement: HTMLDivElement = useMemo(
    () => document.createElement('div'),
    []
  )

  useEffect(() => {
    document.body.append(topElement)

    return (): void => {
      document.body.removeChild(topElement)
    }
  }, [])

  useEffect(() => {
    console.log(visible)
  }, [visible])

  return ReactDOM.createPortal(
    <StyledBackgroundDIM visible={visible}>
      <StyledModalContainer
        ref={modalRef}
        height={height}
        width={width}
        {...props}>
        {children}
      </StyledModalContainer>
    </StyledBackgroundDIM>,
    topElement
  )
}

export default Modal
