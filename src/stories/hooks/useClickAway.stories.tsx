import styled from '@emotion/styled'
import useClickAway from '@hooks/useClickAway'
import { useState } from 'react'
import type { IStory } from '@data/models'

export default {
  title: 'Hooks/useClickAway'
}

const Popover = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: tomato;
`
interface useClickAwayProps {
  visible: boolean
}

export const Default: IStory<useClickAwayProps> = () => {
  const [visible, setVisible] = useState(false)
  const ref = useClickAway<HTMLDivElement>(e => {
    if ((e?.target as HTMLButtonElement).tagName !== 'BUTTON') {
      setVisible(false)
    }
  })
  return (
    <div>
      <button
        type="button"
        onClick={(): void => {
          setVisible(true)
        }}>
        Show
      </button>
      <Popover ref={ref} style={{ display: visible ? 'block' : 'none' }}>
        PopOver
      </Popover>
    </div>
  )
}
