import { action } from '@storybook/addon-actions'
import type { ButtonProps } from '@base/Button/types'
import type { IStory } from '@data/models'
import Button from '@base/Button'
import { FONT_SIZE } from '@constants'

export default {
  title: 'Components/Base/Button',
  component: Button,
  argTypes: {
    width: {
      defaultValue: 215,
      control: { type: 'number' }
    },
    height: {
      defaultValue: 50,
      control: { type: 'number' }
    },
    theme: {
      defaultValue: 'primary',
      options: [
        'primary',
        'disabled',
        'kakao',
        'line-primary',
        'line-black',
        'line-gray'
      ],
      control: { type: 'inline-radio' }
    },
    fontSize: {
      defaultValue: 'SM',
      options: [...Object.keys(FONT_SIZE)],
      control: { type: 'inline-radio' }
    },
    strong: {
      defaultValue: true,
      control: { type: 'boolean' }
    }
  }
}

const Template: IStory<ButtonProps> = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  children: '기본 버튼',
  type: 'button',
  theme: 'primary',
  onClick: action('기본 버튼 클릭!')
}

export const PostButton = Template.bind({})
PostButton.args = {
  children: '가격 제안하기 (0/2)',
  type: 'button',
  theme: 'primary',
  onClick: action('게시글 상세 버튼 클릭!')
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  children: '가격 제안하기 (0/0)',
  type: 'button',
  theme: 'disabled',
  onClick: action('오퍼 버튼 클릭!')
}

export const SearchButtonPrimary = Template.bind({})
SearchButtonPrimary.args = {
  children: '필터 적용',
  type: 'button',
  width: '150px',
  height: '40px',
  theme: 'primary',
  fontSize: 'NORMAL',
  onClick: action('필터 적용 버튼 클릭!')
}

export const SearchButtonLine = Template.bind({})
SearchButtonLine.args = {
  children: '초기화',
  type: 'button',
  width: '150px',
  height: '40px',
  theme: 'line-primary',
  fontSize: 'NORMAL',
  onClick: action('필터 초기화 버튼 클릭!')
}

export const ReviewButtonPrimary = Template.bind({})
ReviewButtonPrimary.args = {
  children: '후기 보기',
  type: 'button',
  width: '80px',
  height: '30px',
  theme: 'primary',
  fontSize: 'XXS',
  strong: false,
  onClick: action('후기 보기 버튼 클릭!')
}

export const ReviewButtonLine = Template.bind({})
ReviewButtonLine.args = {
  children: '후기 남기기',
  type: 'button',
  width: '80px',
  height: '30px',
  theme: 'line-primary',
  fontSize: 'XXS',
  strong: false,
  onClick: action('후기 남기기 버튼 클릭!')
}

export const ReviewButtonProduct = Template.bind({})
ReviewButtonProduct.args = {
  children: '구매상품 | 잠이 오는 보약 새 상품 >',
  type: 'button',
  height: '30px',
  theme: 'line-gray',
  fontSize: 'NORMAL',
  strong: false,
  onClick: action('구매상품 보기 버튼 클릭!')
}

export const KakaoLoginButton = Template.bind({})
KakaoLoginButton.args = {
  children: '카카오로 로그인',
  type: 'button',
  theme: 'kakao',
  onClick: action('카카오로 로그인 버튼 클릭!')
}

export const MobileLoginButton = Template.bind({})
MobileLoginButton.args = {
  children: '로그인',
  type: 'button',
  width: '55px',
  height: '30px',
  theme: 'line-black',
  fontSize: 'XXS',
  strong: false,
  onClick: action('로그인 버튼 클릭!')
}

export const DuplicateButton = Template.bind({})
DuplicateButton.args = {
  children: '중복검사',
  type: 'button',
  width: '70px',
  height: '40px',
  theme: 'line-gray',
  fontSize: 'XXXS',
  strong: false,
  onClick: action('중복검사 버튼 클릭!')
}

export const MessageButtonPrimary = Template.bind({})
MessageButtonPrimary.args = {
  children: '전송',
  type: 'button',
  width: '50px',
  height: '25px',
  theme: 'primary',
  fontSize: 'XXXS',
  onClick: action('메시지 전송 버튼 클릭!')
}

export const MessageButtonDisabled = Template.bind({})
MessageButtonDisabled.args = {
  children: '전송',
  type: 'button',
  width: '50px',
  height: '25px',
  theme: 'disabled',
  fontSize: 'XXXS',
  onClick: action('메시지 전송 버튼 클릭!')
}
