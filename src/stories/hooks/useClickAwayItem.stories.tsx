import Button from '@base/Button'
import styled from '@emotion/styled'
import { useClickAwayItem } from '@hooks'
import type { IStory } from '@models'
import type { MouseEventHandler } from 'react'
import { useState } from 'react'

export default {
  title: 'Hooks/useClickAwayItem'
}

const StyledDiv = styled.div`
  position: absolute;
  top: 100px;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  background-color: tomato;
  color: white;
`

interface IStoryProps {
  visible: boolean
}

export const UseClickAwayItem: IStory<IStoryProps> = args => {
  const [visible, setVisible] = useState(args.visible)
  const divRef = useClickAwayItem<HTMLDivElement>(() => {
    setVisible(false)
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation()
    setVisible(!visible)
  }

  return (
    <>
      <Button theme="line-black" type="button" onClick={handleClick}>
        clickAway Item
      </Button>
      {visible && <StyledDiv ref={divRef}>hook 테스트</StyledDiv>}
    </>
  )
}
