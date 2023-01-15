import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Input = ({
  id = '',
  name = '',
  value = '',
  type = 'text',
  className = '',
  label = '',
  sizeLogo = 20,
  showLogo = false,
  required = false,
  onChange = () => {},
  error = ''
}) => {
  const [showPass, setShowPass] = useState(false);

  const onTogglePass = () => {
    setShowPass(!showPass);
  }

  return (
    <article className='input__group'>
      { label && <label htmlFor={id}>{label}</label> }
      <div className="input__content">
        <input
          id={id}
          type={showPass && type === "password" ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`input ${className}`}
        />
        {/* ERRORS */}
        { error && <span className='input__error'>{error}</span>}

        {/* LOGO */}
        { showLogo && 
          (
            showPass ? 
              <BsEye
                size={sizeLogo}
                className="input__logo"
                onClick={() => onTogglePass()}
              /> : 
              <BsEyeSlash
                size={sizeLogo}
                className="input__logo"
                onClick={() => onTogglePass()}
              />
          )
        }      
      </div>
    </article>
  )
}

export default Input;
