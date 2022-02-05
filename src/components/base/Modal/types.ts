import type { HTMLAttributes } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number | string
  visible?: boolean
  onClose?(): void
}

type StyledDIMProps = Pick<ModalProps, 'visible'>
type StyledContainerProps = Pick<ModalProps, 'width' | 'height'>

export type { ModalProps, StyledDIMProps, StyledContainerProps }
