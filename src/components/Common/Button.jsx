import React from 'react'
import { Spinner } from './Spinner'

export const Button = ({
  text = 'save',
  disabled = false,
  type = 'button' | 'submit' | 'reset',
  variant = false,
  loading = false,
  onClick = () => {}
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        btn_component 
        ${variant ? 'bg__secundary': '' }
        ${loading ? 'loading': '' }
      `}
    >
      {text}
      {
        loading &&
          <Spinner size="20px" />
      }
    </button>
  )
};