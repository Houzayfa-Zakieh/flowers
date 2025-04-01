import { Link } from "react-router-dom"
const Information = () => {
  return (
    <>
     <div className="flex items-start justify-start gap-[20px] flex-col pr-[20px] pl-[20px]">
        <h4 className="text-[#fff] text-[14px]">INFORMATION</h4>
        <ul className="flex items-start justify-start gap-[15px] flex-col">
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Privacy Page</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">About us</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Careers</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Delivery Information</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Term & Conditions</li></Link>
        </ul>
      </div> 
    </>
  )
}

export default Information
