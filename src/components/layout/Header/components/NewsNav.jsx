import { Link } from "react-router-dom"
const NewsNav = () => {
  return (
    <>
     <div className="absolute w-[230px] mt-[20px] z-10 ml-[-200px] border-t-2 border-[#E55472] bg-white shadow-sm ">
        <ul>

          <Link to="/" className="hover:text-[#E55472]  text-[#666]"><li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">News</li></Link>

          <Link to="/" className="hover:text-[#E55472]  text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">News Grid</li></Link>

          <Link to="/" className="hover:text-[#E55472]  text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">News Left sidebar </li></Link>

          <Link to="/" className="hover:text-[#E55472]  text-[#666]"><li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">News Right sidebar</li></Link>

          <Link to="/" className="hover:text-[#E55472]  text-[#666]"> <li className="pr-[25px] text-[14px] pl-[25px] pt-[5px] pb-[5px]">News details</li></Link>

        </ul>
      </div> 
    </>
  )
}

export default NewsNav
