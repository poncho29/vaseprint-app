import React, { useRef } from 'react';

import { FaTrash } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

export const InputFile = ({
  id = '',
  name = '',
  value = '',
  urlImg = '',
  label = '',
  sizeLogo = 20,
  className = '',
  showLogo = false,
  required = false,
  onChange = (e) => {},
  error = '',
  ...props
}) => {
  const inputRef = useRef(null);

  const uploadFile = () => {
    inputRef.current.click();
  }

  const deleteFile = () => {
    onChange(undefined);

    if (inputRef && inputRef.current.value) {
      inputRef.current.value = '';
      inputRef.current.files = undefined;
    }
  }

  return (
    <div className='inputFile'>
      { urlImg ?
          <button
            type='button'
            className='inputFile__delete'
            onClick={deleteFile}
          >
            <FaTrash size={20}/>
            Borrar imágen
          </button>         
        :
          <button
            type='button'
            className='inputFile__upload'
            onClick={uploadFile}
          >
            <FiUpload size={24}/>
            Subir imágen
          </button>
      }

      <div className='inputFile__group'>
        <input
          id={id}
          type="file"
          ref={inputRef}
          onChange={onChange}
          required={required}
          className={`input ${className}`}
          {...props}
        />
      </div>
    </div>
  )
}
