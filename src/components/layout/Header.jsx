import PhoneIcon from '../icons/PhoneIcon';
import SearchIcon from '../icons/SearchIcon';
import BagShoppingIcon from '../icons/bagShoppingIcon';
import BarsIcon from '../icons/BarsIcon';
import CloseIcon from '../icons/CloseIcon';

import Input from '../common/Input';
import Button from '../common/Button';

import Logo from '../../assets/images/logo.webp';

import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [open, setOpen] = useState(false);
    const click = ()=>{
        setOpen(!open)
    }
    return (
        <header className="bg-white ">

            <div className='topHeader flex items-center flex-wrap justify-center'>
                <div className="topHeader-container pt-[15px] pb-[15px]">

                    <div className='row -mr-[20px] -ml-[20px] mt-0 flex-wrap flex items-center justify-between   lg:w-[1310px]'>

                        <div className='logo md:w-[240px] pl-[20px] pr-[20px] min-w-[185px]  h-full flex items-center justify-center whitespace-nowrap'>
                            <Link to="/"> <img src={Logo} alt="logo" /></Link>
                        </div>

                        <div className='searchField flex items-center justify-between pr-[20px] pl-[20px] '>
                            <div className='pt-[25px] pb-[25px] flex items-center justify-between mr-[50px] gap-5'>
                                <PhoneIcon color="#010101" />
                                <div className='flex items-start justify-start flex-col'>
                                    <h6 className='text-[#666] text-[13px]'>PHONE</h6>
                                    <p className=''>
                                        <a className='text-[#000] text-center text-[13px]' href="tel:012345676">+0123-456-789</a>
                                    </p>
                                </div>
                            </div>
                            <form method='get' className=' pt-[25px] pb-[25px]'>
                                <Input className='pt-[1px] pr-[50px] pb-[1px] pl-[20px] w-[500px] h-[45px] border-1 border-solid border-[#f0f0f0] rounded-[50px]' placeholder="Search here..." />
                                <Button className="pl-[15px] pr-[15px] w-[48px] h-[45px]" type="submit" title={<SearchIcon />} />
                            </form>

                        </div>
                        <div className='cart md:w-[240px] flex items-center justify-center gap-5 pr-[20px] pl-[20px]'>
                            <div className="shoppingF" >
                                <div className="shopping" >
                                    <sup className='flex items-center justify-center'>2</sup>
                                    <BagShoppingIcon data-number="2" />
                                </div>
                            </div>
                            <div className=' flex items-start justify-start flex-col  '>
                                <span className='text-[#666] text-[12px]'>
                                    YOUR CART
                                </span>
                                <span className=' text-[#E55472] text-[12px]'> $89.25</span>
                            </div>
                            <div className="open">
                                <button type='button' onClick={click}>
                                    {open ?
                                            <CloseIcon color="#000"/>
                                            :
                                        <BarsIcon color="#000" />
                                        }
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomHeader bg-white border-solid border-t border-[#f0f0f0] flex items-center justify-center">
                <nav className="space-x-6 hidden md:flex ">
                    <Link to="/">HOME </Link>
                    <Link to="/">PAGES</Link>
                    <Link to="/">SHOP</Link>
                    <Link to="/">PORTFOLIO</Link>
                    <Link to="/">NEWS</Link>
                    <Link to="/">CONTACT</Link>
                </nav>

               
            </div>
        </header>
    )
}

export default Header
