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
      <div className="topHeader-container pt-4 pb-4 w-full px-5">
        <div className="row flex flex-wrap items-center justify-between w-full max-w-[1310px] mx-auto">

          <div className="logo w-auto md:w-[240px] px-5 flex items-center justify-center whitespace-nowrap">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="searchField flex items-center justify-between px-5 flex-1">
            <div className="flex items-center justify-between mr-5 gap-5">
              <PhoneIcon color="#010101" />
              <div className="flex flex-col items-start justify-start">
                <h6 className="text-[#666] text-xs">PHONE</h6>
                <p>
                  <a className="text-[#000] text-center text-xs" href="tel:012345676">
                    +0123-456-789
                  </a>
                </p>
              </div>
            </div>
            <form method="get" className="flex flex-1 items-center pt-6 pb-6">
              <Input
                className="px-5 py-1 w-full md:w-[500px] h-[45px] border border-solid border-[#f0f0f0] rounded-full"
                placeholder="Search here..."
              />
              <Button
                className="px-4 w-[48px] h-[45px]"
                type="submit"
                title={<FontAwesomeIcon className="hover:text-[#E55472]" icon={faMagnifyingGlass} />}
              />
            </form>
          </div>

          <div className="cart w-auto md:w-[240px] flex items-center justify-center gap-5 px-5">
            <button onClick={() => setCart(!cart)} className="flex items-center gap-5 cursor-pointer">
              <div className="shoppingF relative">
                <div className="shopping">
                  <sup className="absolute top-0 right-0 flex items-center justify-center text-xs bg-red-500 rounded-full w-4 h-4 text-white">
                    2
                  </sup>
                  <BagShoppingIcon />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="text-[#666] text-xs">YOUR CART</span>
                <span className="text-[#E55472] text-xs">$89.25</span>
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