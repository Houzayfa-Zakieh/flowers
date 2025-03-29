import PhoneIcon from '../../../icons/PhoneIcon';
import BagShoppingIcon from '../../../icons/bagShoppingIcon';
import BarsIcon from '../../../icons/BarsIcon';
import CloseIcon from '../../../icons/CloseIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import useStore from './useStore';
import UseStore2 from './UseStore2';
import Logo from '../../../../assets/images/logo.webp';

const TopHeader = () => {
  const { open, setOpen } = useStore();
  const { cart, setCart } = UseStore2();

  return (
    <div className="topHeader flex items-center flex-wrap justify-center">
      <div className="topHeader-container pt-4 pb-4 w-full ">
        <div className="row flex flex-wrap items-center justify-evenly w-[100%]">

          <div className="logo w-auto md:w-[240px] flex items-center justify-center whitespace-nowrap">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="searchField flex items-center justify-between gap-[30px]">
            <div className="flex items-center justify-between gap-5">
              <PhoneIcon color="#010101" />
              <div className="flex flex-col items-start justify-start">
                <h6 className="text-[#666] !font-thin text-[13px]">PHONE</h6>
                <p>
                  <a className="text-[#000] text-center !font-thin text-[13px]" href="tel:012345676">
                    +0123-456-789
                  </a>
                </p>
              </div>
            </div>
            <form method="get" className="!w-[500px] flex items-center pt-6 pb-6 relative">
              <Input className="px-5 py-1 w-[100%] outline-[#E55472] h-[45px] border border-solid border-[#f0f0f0] rounded-full !font-thin" placeholder="Search here..." />
              <Button className="w-[48px] h-[45px] absolute right-[5px]" type="submit" title={<FontAwesomeIcon className="hover:text-[#E55472]" icon={faMagnifyingGlass} />} />
            </form>
          </div>

          <div className="cart w-auto md:w-[240px] flex items-center justify-center gap-5">
            <button onClick={() => setCart(!cart)} className="flex items-center gap-5 cursor-pointer">
              <div className="shoppingF relative">
                <div className="shopping relative">
                  <sup className="absolute top-[-5px] right-[-15px] flex items-center justify-center text-[#fff] text-[12px] bg-[#E55472] rounded-[50%] w-[20px] h-[20px] ">
                    2
                  </sup>
                  <BagShoppingIcon />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="text-[#666] !font-thin text-[12px]">YOUR CART</span>
                <span className="text-[#E55472] text-[12px]">$89.25</span>
              </div>
            </button>
            <div className="open block md:hidden">
              <button type="button" onClick={() => setOpen(!open)}>
                {open ? <CloseIcon color="#000" /> : <BarsIcon color="#000" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;