import type { HTMLAttributes, RefObject } from 'react'

interface IdialogItem {
  text: string
  href?: string
  onClick?(e?: any): void
}

interface DialogProps<RefType> extends HTMLAttributes<HTMLUListElement> {
  dialogRef: RefObject<RefType> | null
  width?: string | number
  dialogItemList: IdialogItem[]
  visible: boolean
}

type dialogItemListType = IdialogItem[]

type styledDialogProps = Pick<
  DialogProps<HTMLUListElement>,
  'visible' | 'width' | 'dialogItemList'
>

export type { DialogProps, styledDialogProps, dialogItemListType }
