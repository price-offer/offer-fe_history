import Spinner from '@base/Spinner'
import type { SpinnerProps } from '@base/Spinner/types'
import type { IStory } from '@data/models'
import styled from '@emotion/styled'

export default {
  title: 'Components/Base/Spinner',
  component: Spinner,
  argTypes: {
    loading: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
    size: {
      defaultValue: 50,
      control: { type: 'number' }
    }
  }
}

const StyledSpinnerWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  padding-left: 30px;
`

export const Primary: IStory<SpinnerProps> = args => (
  <StyledSpinnerWrapper>
    <Spinner {...args} />
  </StyledSpinnerWrapper>
)
