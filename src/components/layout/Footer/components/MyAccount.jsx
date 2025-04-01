import { Link } from 'react-router-dom';
const MyAccount = () => {
  return (
    <>
      <div className="flex items-start justify-start gap-[20px] flex-col pr-[20px] pl-[20px]">
        <h4 className="text-[#fff] text-[14px]">MY ACCOUNT</h4>
        <ul className="flex items-start justify-start gap-[15px] flex-col">
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">My account</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Checkout</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Contact us</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Shopping Cart</li></Link>
          <Link to="#"><li className="text-[#999] hover:text-[#E55472] !font-thin text-[14px]">Wishlist</li></Link>
        </ul>
      </div>
    </>
  )
}

export default MyAccount
