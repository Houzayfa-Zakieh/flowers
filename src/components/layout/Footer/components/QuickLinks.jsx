import { Link } from "react-router-dom"
const QuickLinks = () => {
  return (
    <>
      <div className="flex items-start justify-start gap-[20px] flex-col pr-[20px] pl-[20px]">
        <h4 className="text-[#fff] text-[14px]">QUICK LINKS</h4>
        <ul className="flex items-start justify-start gap-[15px] flex-col">
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Store Location</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Orders Tracking</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Size Guide</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">My Account</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">FAQs</li></Link>
        </ul>
      </div>
    </>
  )
}

export default QuickLinks
