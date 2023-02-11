import { FaSearch } from "react-icons/fa";

export const InputSearch = ({
  id = '',
  name = '',
  value = '',
  label = '',
  type = 'text',
  className = '',
  sizeLogo = 20,
  required = false,
  showSearch = false,
  placeholder = 'Buscar',
  onChange = (e) => {},
  ...props
}) => {
  return (
    <div className="inputSearch__ctn">
      <div className="inputSearch__icon">
        { showSearch &&
            <FaSearch size={sizeLogo} />
        }
      </div>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        className={`inputSearch ${className}`}
        {...props}
        onChange={onChange}
      />     
    </div>
  )
};
