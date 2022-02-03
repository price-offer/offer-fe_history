import type { HtmlHTMLAttributes } from 'react'
import type { FONT_SIZE } from '@constants'
import type { IItemType } from '@models'

type directionType = 'vertical' | 'horizontal'
type TextFontSizeKeys = keyof typeof FONT_SIZE

interface RadioProps extends HtmlHTMLAttributes<HTMLInputElement> {
  radioItemList?: IItemType[]
  radioName?: string
  direction?: directionType
  radioSize?: number | string
  fontSize?: TextFontSizeKeys
}

type StyledRadioProps = Pick<RadioProps, 'radioSize' | 'fontSize' | 'direction'>

export type { RadioProps, StyledRadioProps, directionType }
