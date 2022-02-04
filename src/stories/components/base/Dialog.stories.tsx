import { action } from '@storybook/addon-actions'
import Button from '@base/Button'
import Dialog from '@base/Dialog'
import type { DialogProps } from '@base/Dialog/types'
import type { IStory } from '@data/models'
import { useClickAwayItem } from '@hooks'
import type { MouseEventHandler } from 'react'
import { useState } from 'react'

export default {
  title: 'Components/Base/Dialog',
  component: Dialog,
  argTypes: {
    width: {
      defaultValue: 90,
      control: { type: 'number' }
    }
  }
}

const Template: IStory<DialogProps<HTMLUListElement>> = args => {
  const [visible, setVisible] = useState(args.visible)
  const dialogRef = useClickAwayItem<HTMLUListElement>(() => {
    setVisible(false)
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation()
    setVisible(!visible)
  }

  return (
    <>
      <Button
        height="40px"
        theme="line-black"
        type="button"
        width="80px"
        onClick={handleClick}>
        Dialog
      </Button>
      <Dialog {...args} dialogRef={dialogRef} visible={visible} />
    </>
  )
}

export const HeaderDialog = Template.bind({})
HeaderDialog.args = {
  visible: false,
  dialogItemList: [
    {
      href: 'profile',
      text: '내 프로필',
      onClick: (e): void => {
        e.preventDefault()
        console.log('내 프로필')
      }
    },
    {
      href: 'messages',
      text: '내 쪽지함',
      onClick: (e): void => {
        e.preventDefault()
        console.log('내 쪽지함')
      }
    },
    {
      text: '로그아웃',
      onClick: action('로그아웃!')
    }
  ]
}

export const ProductDialog = Template.bind({})
ProductDialog.args = {
  visible: false,
  dialogItemList: [
    {
      text: '게시글 수정',
      onClick: action('게시글 수정!')
    },
    {
      text: '게시글 삭제',
      onClick: action('게시글 삭제!')
    }
  ]
}
