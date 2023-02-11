export const AboutCard = ({
  text = '',
  title = '',
  align = 'flex-start'
}) => {
  return (
    <article
      className="about__card"
      style={{ 
        alignSelf: align,
        color: align === 'flex-start'
          ? 'white'
          : 'black',
        borderRadius: align === 'flex-start' 
          ? '0 15px 15px 0'
          : '15px 0 0 15px',
        backgroundColor: align === 'flex-start'
          ? '#00AFF0'
          : 'white'
      }}
    >
      <h4 className="about__card--title">{title}</h4>

      <p className="about__card--text">
        {text}
      </p>
    </article>
  )
}