import { Link } from "react-router-dom"
const PortfolioNav = () => {
  return (
    <>
      <div className="absolute w-[230px] z-100 mt-[20px] -ml-[45px] border-t-2 border-[#E55472] bg-white shadow-sm">
        <ul>

          <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"><li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Portfolio </li></Link>

          <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"> <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Portfolio - 02</li></Link>

          <Link to="/" className="hover:text-[#E55472] text-[14px] text-[#666]"> <li className="pr-[25px] pl-[25px] pt-[5px] pb-[5px]">Portfolio Details </li></Link>
        </ul>
      </div>
    </>
  )
}

export default PortfolioNav
