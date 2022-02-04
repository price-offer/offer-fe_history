interface IStory<PropsType> {
  (): any
  args?: PropsType
}
interface IItemType {
  code: number | string
  name: number | string
}

export type { IStory, IItemType }
