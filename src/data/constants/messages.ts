export const TITLE_MESSAGE = {
  OFFER: '가격을 제시해 볼까요?',
  TRADE_STATUS: '구매자를 확정해주세요!'
} as const

export const DESCRIPTION_MESSAGE = {
  WELCOME: '구매자가 제안해요, Offer',
  SIGN_UP: '아직 회원이 아니신가요?',
  FORGET_PASSWORD: '비밀번호를 잊으셨나요?',
  PASSWORD: '영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
  OFFER_MODAL: '당신의 제안이 마음에 든다면, 연락이 올 거에요!',
  OFFER_PRODUCT: '아직 제안된 가격이 없어요, 가격을 제안해 볼까요?',
  TRADE_STATUS: '판매 완료는 반드시 구매자를 확정해야 합니다!',
  DISABLED_OFFER: '예약중인 물건은 가격 제안을 할 수 없어요!',
  DISABLED_OFFER_WRITER: '글 작성자는 오퍼를 할 수 없어요!',
  PRICE_FILTER: '가격은 숫자로만 입력할 수 있어요!',
  NOTICE_IMAGE: `* 상품 이미지는 640x640에 최적화 되어 있습니다.
                - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
                - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
                - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
                - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
                최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요.`,
  SELECT_MESSAGE: '쪽지할 상대를 선택해주세요.'
} as const

export const PLACEHOLDER_MESSAGE = {
  EMAIL: '이메일',
  PASSWORD: '비밀번호',
  CONFIRM_PASSWORD: '비밀번호 확인',
  NICKNAME: '닉네임 (2~15자)',
  TRADE_AREA: '시 구 순으로 입력해 주세요.',
  PRODUCT_NAME: '상품 이름을 입력해 주세요.',
  PRODUCT_DESCRIPTION: '상품 설명을 입력해 주세요.',
  INPUT_NUMBER: '숫자만 입력해 주세요.',
  SEND_MESSAGE: '메세지를 입력해 주세요',
  SEARCH: '상품명으로 원하는 물건을 검색해 보세요!',
  REVIEW: '상대방에게 거래 후기를 남겨주세요!'
} as const

export const VALIDATE_MESSAGE = {
  BLANK_VALUE: '필수값을 입력해주세요!',
  NOT_EMAIL: '이메일 형식이 아닙니다!',
  PASSWORD_CONDITION: '비밀번호 조건을 확인해 주세요!',
  PASSWORD_DIFFRENT: '비밀번호가 일치하지 않습니다!',
  NICKNAME_LENGTH: '닉네임 문자 개수를 확인해 주세요! (2~15자)',
  MESSAGE_LENGTH: '쪽지는 100자를 넘을 수 없습니다!',
  REVIEW_LENGTH: '리뷰는 100자를 넘을 수 없습니다!',
  ONLY_NUMBER: '숫자만 입력해주세요!',
  MIN_PRICE_PRODUCT: '최소 가격이 최대 가격을 넘길 수 없습니다!',
  MAX_PRICE_PRODUCT: '최대 설정금액을 초과했습니다! (최대 999,999,999원)',
  MAX_PRICE_OFFER: '최대 오퍼금액을 초과했습니다! (최대 999,999,999원)',
  TRADE_STATUS: '상대방에 대한 평가를 선택해주세요!'
} as const
