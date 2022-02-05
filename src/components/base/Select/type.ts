import type { SelectHTMLAttributes } from 'react'
import type { IItemType } from '@models'
import type { FONT_SIZE } from '@constants'

type TextFontSizeKeys = keyof typeof FONT_SIZE

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectItemList: IItemType[]
  defaultItem: IItemType
  width?: number | string
  height?: number | string
  fontSize?: TextFontSizeKeys
}

type StyledSelectProps = Pick<SelectProps, 'width' | 'height' | 'fontSize'>

export type { SelectProps, StyledSelectProps }
