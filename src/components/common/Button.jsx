const Button = (props) => {
  return (
    <>
     <button type={props.type} className={props.className}>{props.title}</button> 
    </>
  )
}

export default Button
