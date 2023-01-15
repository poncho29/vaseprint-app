import React from 'react'

const Button = ({
  text = 'save',
  disabled = false,
  type = 'button' | 'submit' | 'reset',
  variant = false,
  onClick = () => {}
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn_component ${variant ? 'bg__secundary': '' }`}
    >
      {text}
    </button>
  )
}

export default Button