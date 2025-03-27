import { Link } from "react-router-dom"
const CustomerService = () => {
    return (
        <>
            <div className="flex items-start justify-start gap-[20px] flex-col pr-[20px] pl-[20px]">
                <h4 className="text-[#fff] text-[14px]">CUSTOMER SERVICE</h4>
                <ul className="flex items-start justify-start gap-[15px] flex-col">
                    <Link to="/"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Shipping Policy</li></Link>
                    <Link to="/"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Help & Contact Us</li></Link>
                    <Link to="/"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Returns & Refunds</li></Link>
                    <Link to="/"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Online Stores</li></Link>
                    <Link to="/"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Terms and Conditions</li></Link>
                </ul>
            </div>
        </>
    )
}

export default CustomerService
