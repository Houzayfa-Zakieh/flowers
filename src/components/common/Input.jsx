
const Input = (props) => {
  return (
    <>
     <input type={props.type} placeholder={props.placeholder} required={props.required} tabIndex={props.tabIndex} autoFocus={props.autoFocus} className={props.className}/> 
    </>
  )
}

export default Input
