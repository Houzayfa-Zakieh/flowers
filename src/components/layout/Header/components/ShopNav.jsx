import { Link } from "react-router-dom";
import { useState } from "react";
import OtherPagesNav from "./OtherPagesNav";
import RightArrowIcon from "../../../icons/RightArrowIcon";
const ShopNav = () => {
    const [showOtherMenu, setShowOtherMenu] = useState(false);

  return (
    <div className="absolute w-[230px] z-100 mt-[20px] -ml-[30px] border-t-2 border-[#E55472] bg-white shadow-sm">
    <ul>

        <Link to="/" className="hover:text-[#E55472] text-[#666]"><li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">Shop </li></Link>


        <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">Shop Grid  </li></Link>


        <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">Shop Left sidebar </li></Link>


        <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">Shop right sidebar   </li></Link>

        
        <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">Shop details </li></Link>


        <div
      className="relative -mt-[25px]"
      onMouseEnter={() => setShowOtherMenu(true)}
      onMouseLeave={() => setShowOtherMenu(false)}
    >
        <Link to="/" className="hover:text-[#E55472] text-[#666]"> <li className="pr-[25px] pl-[25px] text-[14px] pt-[5px] pb-[5px] flex gap-[5px]">Other Pages <RightArrowIcon color="#666"/> </li></Link>
        {showOtherMenu && (
        <div className="absolute top-full -translate-x-1/2">
          <OtherPagesNav />
        </div>
      )}
    </div>

    </ul>
</div>
  )
}

export default ShopNav
