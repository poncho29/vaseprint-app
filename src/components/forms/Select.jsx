import { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Select = ({
  id = '',
  name = '',
  value = '',
  options = [],
  handlerChange = (e) => {}
}) => {
  const [changeArrow, setChangeArrow] = useState(false);

  return (
    <div
      className='select__ctn'
      onClick={() => setChangeArrow(true)}
    >
      <select
        id={id}
        name={name}
        value={value}
        className='select__component'
        onChange={ (e) => {{
          handlerChange(e.target.value)
          setChangeArrow(false)
        }}
        }
      >
        {options.map((item, idx) => (
          <option
            key={idx}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
      <div className='select__arrow'>
        { changeArrow ? <FaAngleUp /> : <FaAngleDown /> }
      </div>
    </div>
  )
}

export default Select