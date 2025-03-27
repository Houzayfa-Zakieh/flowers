import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const LatestNewsCard = (props) => {
  return (
    <>
    <div className="card flex items-start justify-start flex-col  w-[400px] gap-[20px]">
        <img src={props.img} className='w-full' alt={props.alt} />
        <div className='flex items-center justify-center gap-[20px]'>
            <p className='text-[#666] text-[14px]'>{props.history}</p>
            <Link to="/" className='flex items-center text-[#666] hover:text-[#E55472] text-[14px] justify-center gap-[10px]'> <FontAwesomeIcon icon={faComment} />{props.commentNumbers} </Link>
        </div>
        <Link to="/" className='text-[#010101] text-[24px] w-full !font-thin hover:text-[#E55472] text-start'>{props.commentTitle}</Link>
        <div className='w-[90px] h-[2px] bg-[#E55472]'></div>
      </div>
    </>
  )
}

export default LatestNewsCard
