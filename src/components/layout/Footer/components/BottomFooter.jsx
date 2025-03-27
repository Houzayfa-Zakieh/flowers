import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
const BottomFooter = () => {
  return (
    <>
     <div className='flex items-center justify-between w-full border-t-1 border-[#3b3c3d] p-[15px] mr-[150px] ml-[150px]'>
        <p className='text-[#999] text-[12px] !font-thin'>© 2025 - JUST FOR YOU</p>
        <div className='flex items-center gap-[15px]'>
          <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faFacebook} /></a>
          <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faTwitter} /></a>
          <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faPinterest} /></a>
          <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faInstagram} /></a>
        </div>
      </div> 
    </>
  )
}

export default BottomFooter
