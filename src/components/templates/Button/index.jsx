import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = ({ style, className, children, onClick }) => {
  const handleClick = e => {
    e.prevenDefault()
    onClick()
  }
  return (
    <CommonButton className={className} style={style} onClick={handleClick}>
      {children}
    </CommonButton>
  )
}

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
}
const CommonButton = styled.button`
  width: 324px;
  height: 50px;
  font-size: 16px;
  color: #ffffff;
  background-color: #f74f2a;
  border-radius: 3px;
  border: none;
  display: block;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`

export default Button