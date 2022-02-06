import type { ReactElement } from 'react'
import StyledDialogWrapper from './styled'
import Link from 'next/dist/client/link'
import type { DialogProps } from './types'

const Dialog = ({
  dialogRef,
  width = '90px',
  dialogItemList,
  visible = false,
  ...props
}: DialogProps<HTMLUListElement>): ReactElement => (
  <StyledDialogWrapper
    ref={dialogRef}
    dialogItemList={dialogItemList}
    visible={visible}
    width={width}
    {...props}>
    {dialogItemList?.map(({ href, text, onClick }, idx) => (
      <li key={idx}>
        {href ? (
          <Link href={href}>
            <a onClick={onClick}>{text}</a>
          </Link>
        ) : (
          <span onClick={onClick}>{text}</span>
        )}
      </li>
    ))}
  </StyledDialogWrapper>
)

export default Dialog
