import type { ReactElement } from 'react'
import type { SpinnerProps } from './types'
import { HashLoader } from 'react-spinners'
import { PRIMARY } from '@constants'

const Spinner = ({ loading = true, size = 50 }: SpinnerProps): ReactElement => (
  <HashLoader color={PRIMARY} loading={loading} size={size} />
)

export default Spinner
