import { Link } from "react-router-dom"

const OtherPagesNav = () => {
    return (
        <div className="absolute z-9999 w-[230px] ml-[230px] mt-[-70px] border-t-2 border-[#E55472] bg-white shadow-sm">
            <ul>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"><li className="pr-[25px] text-[14px]  pl-[25px] pt-[5px] pb-[5px]">Cart </li></Link>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px]  pl-[25px] pt-[5px] pb-[5px]">Wishlist</li></Link>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px]  pl-[25px] pt-[5px] pb-[5px]">Checkout </li></Link>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px]  pl-[25px] pt-[5px] pb-[5px]">Order Tracking   </li></Link>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px]  pl-[25px] pt-[5px] pb-[5px]">My Account</li></Link>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px]  pl-[25px] pt-[5px] pb-[5px]">Sign in   </li></Link>

                <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px]  text-[14px] pl-[25px] pt-[5px] pb-[5px]">Register   </li></Link>
            </ul>
        </div>)
}

export default OtherPagesNav
