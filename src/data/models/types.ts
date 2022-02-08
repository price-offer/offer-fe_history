import type { ReactElement } from 'react'
interface IStory<Props> {
  (args: Props): ReactElement
  args?: Props
}
interface IItemType {
  code: number | string
  name: number | string
}

export type { IStory, IItemType }
