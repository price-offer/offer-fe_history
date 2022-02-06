import type { ReactElement } from 'react'
interface IStory<Props> {
  (args: Props): ReactElement
  args?: Props
}

export type { IStory }
