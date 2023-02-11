export const Title = ({
  title = '',
  classname= ''
}) => {
  return (
    <h1 className={classname}>
      {title}
    </h1>
  )
}
