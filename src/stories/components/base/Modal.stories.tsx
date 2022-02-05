import Modal from '@components/base/Modal'
import type { ModalProps } from '@base/Modal/types'
import { useState } from 'react'
import type { IStory } from '@data/models'

export default {
  title: 'Components/Base/Modal',
  component: Modal,
  argTypes: {
    width: { defaultValue: '350px', control: 'text' },
    height: { defaultValue: '500px', control: 'text' },
    visible: { defaultValue: false, control: 'boolean' }
  }
}

export const Default: IStory<ModalProps> = args => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={(): void => {
          setVisible(true)
        }}>
        Click Me !
      </button>
      <Modal
        {...args}
        visible={visible}
        onClose={(): void => {
          setVisible(false)
        }}>
        Hello World
      </Modal>
    </div>
  )
}
