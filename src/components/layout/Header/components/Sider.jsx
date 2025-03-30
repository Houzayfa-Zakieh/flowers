import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo.webp';

import Input from '../../../common/Input';
import Button from '../../../common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import useStore from './useStore';

import TwitterIcon from '../../../icons/TwitterIcon';
import PinterestIcon from '../../../icons/PinterestIcon';
import InstagramIcon from '../../../icons/InstagramIcon';
import FacebookIcon from '../../../icons/FacebookIcon';
import CloseIcon from '../../../icons/CloseIcon';
import PlusIcon from '../../../icons/PlusIcon';


const Sider = () => {
    const [showList, setShowList] = useState(false);

    const toggleShowList = () => setShowList((prev) => !prev);

    const [showList2, setShowList2] = useState(false);

    const toggleShowList2 = () => setShowList2((prev) => !prev);


    const [showList3, setShowList3] = useState(false);

    const toggleShowList3 = () => setShowList3((prev) => !prev);

    const [showList4, setShowList4] = useState(false);

    const toggleShowList4 = () => setShowList4((prev) => !prev);

    const { open, toggleOpen } = useStore();

    return (
        <>
            <div className={(open ? "sider show pt-[50px] pb-[50px] pr-[40px] bg-white pl-[40x] overflow-y-auto overflow-x-hidden fixed left-[-400px] z-100 top-0 h-screen w-[350px] shadow-lg" : "sider pt-[50px] fixed left-[-400px] z-100 top-0 pb-[50px] pr-[40px] bg-white pl-[40x] overflow-y-auto overflow-x-hidden h-screen w-[350px] shadow-lg")} >
                <div className="siderContainer flex flex-col gap-[20px] p-8 ">
                    <div className="logo flex !w-[250px] items-center justify-between border-b border-[#f7f7f7] pb-[20px]">
                        <img src={Logo} alt="Logo" />
                        <button type="button" onClick={toggleOpen} >
                            <CloseIcon color="#666" />
                        </button>
                    </div>
                    <form method='get' className='relative pb-[20px]'>
                        <Input className='pt-[1px] pl-[20px] outline-[#E55472] w-[260px] h-[45px] border-1 border-solid bg-[#f7f7f7] border-[#f7f7f7]' placeholder="Search..." />
                        <Button className="pl-[35px] pr-[20px] w-[35px] h-[45px] absolute right-0 top-0 cursor-pointer" type="submit" title={<FontAwesomeIcon className='hover:text-[#E55472] text-[20px]' icon={faMagnifyingGlass} />} />
                    </form>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-[10px] cursor-pointer" onClick={toggleShowList}>
                            <span className="text-[16px] pt-[8px] pb-[8px] hover:text-[#E55472] text-[#666]">HOME</span>
                            <PlusIcon color="#666" />
                        </div>
                        {showList && (
                            <ul className="mt-2 space-y-2">
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        Home Style - 01
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        Home Style - 02
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        Home Style - 03
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        Home Style - 04
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>
                    <Link to="/" className='hover:text-[#E55472] text-[14px] pt-[8px] pb-[8px] text-[#666]'>ABOUT US</Link>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-[10px] cursor-pointer" onClick={toggleShowList2}>
                            <span className="text-[16px] pt-[8px] pb-[8px] hover:text-[#E55472] text-[#666]">SHOP</span>
                            <PlusIcon color="#666" />
                        </div>

                        {showList2 && (
                            <ul className="mt-2 space-y-2">
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        Shop
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        Shop Grid
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        Shop Left sidebar
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        Shop right sidebar
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        Shop details
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        Cart
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        Wishlist
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        Checkout
                                    </li>
                                </Link>

                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        Order Tracking
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        My Account
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        Sign in
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        Register
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-[10px] cursor-pointer" onClick={toggleShowList3}>
                            <span className="text-[16px] pt-[8px] pb-[8px] hover:text-[#E55472] text-[#666]">NEWS</span>
                            <PlusIcon color="#666" />
                        </div>

                        {showList3 && (
                            <ul className="mt-2 space-y-2">
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        News
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        News Grid
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        News Left sidebar
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        News Right sidebar
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        News details
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>


                    <div className="flex flex-col gap-2">

                        <div className="flex items-center justify-between gap-[10px] cursor-pointer" onClick={toggleShowList4}>
                            <span className="text-[16px] pt-[8px] pb-[8px] hover:text-[#E55472] text-[#666]">PAGES</span>
                            <PlusIcon color="#666" />
                        </div>

                        {showList4 && (
                            <ul className="mt-2 space-y-2">
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        About Us
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        Portfolio
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        Portfolio - 02
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        Portfolio Details
                                    </li>
                                </Link>

                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        FAQ
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "200ms" }}>
                                        Google Map Locations
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "300ms" }}>
                                        404
                                    </li>
                                </Link>
                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "400ms" }}>
                                        Contact
                                    </li>
                                </Link>

                                <Link to="/" className="block hover:text-[#E55472] text-[14px] text-[#666]">
                                    <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px] animate-fadeIn" style={{ animationDelay: "100ms" }}>
                                        Coming Soon
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>
                    <Link to="/" className='hover:text-[#E55472] text-[14px] pt-[8px] pb-[8px] text-[#666]'>CONTACT</Link>
                    <div className='h-[1px] bg-[#f7f7f7] w-full'></div>
                    <div className='flex items-center gap-[20px]'>
                        <div className='border-1 border-[#666] p-[10px] pr-[15px]'>
                            <Link to="/"><FontAwesomeIcon className='hover:text-[#E55472] text-[#666]' icon={faUser} /></Link>
                        </div>
                        <Link to="/" className='hover:text-[#E55472] text-[14px] pt-[8px] pb-[8px] text-[#666]'>  My Account</Link>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <div className='border-1 sup border-[#666] p-[10px] pr-[15px] relative'>
                            <sup className='flex items-center justify-center text-[#666] absolute top-[15px] right-[-3px] w-[20px] text-[12px]'>3</sup>
                            <Link to="/"><FontAwesomeIcon className='hover:text-[#E55472] text-[#666]' icon={faHeart} /></Link>
                        </div>
                        <Link to="/" className='hover:text-[#E55472] text-[14px] pt-[8px] pb-[8px] text-[#666]'>  Wishlist</Link>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <div className='border-1 sup border-[#666] p-[10px] pr-[15px] relative'>
                            <sup className='flex items-center justify-center text-[#666] absolute top-[15px] w-[20px] right-[-3px] text-[12px]'>5</sup>
                            <Link to="/"><FontAwesomeIcon className='hover:text-[#E55472] text-[#666]' icon={faBagShopping} /></Link>
                        </div>
                        <Link to="/" className='hover:text-[#E55472] text-[14px] pt-[8px] pb-[8px] text-[#666]'>Shopping Cart</Link>
                    </div>
                    <div className='h-[1px] bg-[#f7f7f7] w-full mt-[10px]'></div>
                    <div className='flex items-center justify-start gap-[20px] mt-[30px]'>
                        <div className="bg-[#f9f9f9] hover:bg-[#E55472] p-[10px]"><FacebookIcon color="#666" className="w-[25px]" /></div>
                        <div className="bg-[#f9f9f9] hover:bg-[#E55472] p-[10px]"><TwitterIcon color="#666" className="w-[25px]" /></div>
                        <div className="bg-[#f9f9f9] hover:bg-[#E55472] p-[10px]"><PinterestIcon color="#666" className="w-[25px]" /></div>
                        <div className="bg-[#f9f9f9] hover:bg-[#E55472] p-[10px]"><InstagramIcon color="#666" className="w-[25px]" /></div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sider
