import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Payment from '../../../../assets/images/Payment.webp';

const AboutOurShop = () => {
  return (
    <>
     <div className="flex items-start justify-start gap-[20px] flex-col pr-[20px] pl-[20px]">
        <h4 className="text-[#fff] text-[14px] !pl-[0px]">ABOUT OUR SHOP</h4>
        <p className="text-[#999] text-[14px] !font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmo incididunt ut labore et dolore</p>
        <div className='flex items-start gap-[10px] text-[#999] text-[14px] flex-col'>
          <p><FontAwesomeIcon icon={faLocationDot} /> Brooklyn, New York, United States</p>
          <div className='flex items-center gap-[10px] hover:text-[#e55472]'>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:012345676">+0123-456-789</a>
          </div>
          <div className='flex items-center gap-[10px] hover:text-[#e55472]'>
            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:">example@example.com</a>
          </div>
        </div>
        <img src={Payment} alt="payment" />
      </div> 
    </>
  )
}

export default AboutOurShop
