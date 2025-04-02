import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const ReviewsCards = (props) => {
    return (
        <>
            <div className='flex items-start justify-center gap-[30px]'>
                <img src={props.image} alt="Author image"  className='w-[80px] h-[80px] rounded-[50%]'/>
                <div className='relative flex items-start justify-start flex-col gap-[15px] bg-[#f4f7fc] px-[30px] pt-[30px] pb-[10px]'>
                    <h6 className='text-[#010101] text-[16px] !font-thin'>{props.authorName}</h6>
                    <div className='flex items-start justify-start gap-[2px]'>
                        {[faStar, faStar, faStar, faStar, faStar].map((star, index) =>
                            <Link to="#" key={index}><FontAwesomeIcon icon={star} className='text-[#666] hover:text-[#e55472]' /></Link>
                        )}
                    </div>
                    <p className='text-[#000] text-[14px] !font-thin'>{props.comment}</p>

                    <span className='text-[#fff] leading-[33px] text-[14px] px-[13px] bg-[#e55472] absolute right-[20px] top-[20px] border-1 border-[#f1f1f1] rounded-[25px]'>{props.date}</span>
                </div>
            </div>
        </>
    )
}

export default ReviewsCards
