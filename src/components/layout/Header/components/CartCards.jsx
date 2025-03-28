import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const CartCards = (props) => {
  return (
    <div className={props.className}>
      <div className='relative'>
        <img src={props.img} alt={props.alt} className={props.imgClassName} />
        <button className={props.buttonIconClassName}><FontAwesomeIcon icon={faTrash} className='w-[10px] ' /></button>
      </div>
      <div className={props.titlePriceClassName}>
        <p className={props.pClassName}>{props.title}</p>
        <span className={props.spanClassName}>{props.price}</span>
      </div>
    </div>
  )
}

export default CartCards
