export const TextArea = ({
  id = '',
  name = '',
  value = '',
  cols = 30,
  rows = 10,
  className = '',
  label = '',
  sizeLogo = 20,
  showLogo = false,
  required = false,
  onChange = () => {},
  error = '',
  ...props
}) => {
  return (
    <article className='area__group'>
      { label && <label htmlFor={id}>{label}</label> }
      <div className='area__content'>
        <textarea
          id={id}
          name={name}
          cols={cols}
          rows={rows}
          value={value}
          onChange={onChange}
          className={`textArea ${className}`}
          {...props}
        ></textarea>

        {/* ERRORS */}
        { error && <span className='input__error'>{error}</span>}
      </div>
    </article>
  )
}
