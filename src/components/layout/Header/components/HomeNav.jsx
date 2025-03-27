import { Link } from "react-router-dom";

const HomeNav = () => {
    return (
        <div className="absolute w-[230px] mt-[20px] z-10  border-t-2 border-[#E55472] bg-white shadow-sm">
            <ul>

                <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"><li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Home Style - 01 </li></Link>


                <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"> <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Home Style - 02  </li></Link>


                <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"> <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Home Style - 03 </li></Link>


                <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"> <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Home Style - 04   </li></Link>

            </ul>
        </div>
    );
};

export default HomeNav;
