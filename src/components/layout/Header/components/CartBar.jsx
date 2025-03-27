import CloseIcon from "../../../icons/CloseIcon"
import UseStore2 from "./UseStore2"
import { Link } from "react-router-dom";
import cart1 from '../../../../assets/images/products1.webp'
import CartCards from "./CartCards";
const CartBar = () => {
    const {cart, toggleCart} = UseStore2();
    const cartData = [
        { id: 1, img: cart1 , alt: "image" , title: "Premium Joyful" , price: "1 x $65.00"},
        { id: 2, img: cart1 , alt: "image" , title: "The White Rose" , price: "1 x $85.00"},
        { id: 3, img: cart1 , alt: "image" , title: "Red Rose Bouquet" , price: "1 x $92.00"},
        { id: 4, img: cart1 , alt: "image" , title: "Pink Flower Tree" , price: "1 x $68.00"},
    ]

    return (
        <>
            <div className={(cart ? "cart2 show w-[400px] min-h-[100vh] bg-white pr-[10px] pl-[30px] pt-[20px] pb-[20px] shadow-sm" : "cart2 w-[400px] min-h-[100vh] bg-white pr-[10px] pl-[30px] pt-[20px] pb-[20px] shadow-sm")} id="cart">
                <div className="cartContainer flex items-start justify-start flex-col pr-[20px] gap-[20px]">
                    <div className="pb-[30px] flex items-center justify-between !w-[340px] border-b-2  border-[#f0f0f0]">
                        <span className="text-[16px] text-[#666] !font-thin">CART</span>
                        <button type="button" className="cursor-pointer" onClick={toggleCart} >
                        <CloseIcon color="#666" className="w-[20px]"  />
                        </button>
                    </div>
                    <div className="flex items-start justify-start flex-col">
                    {cartData.map((cart)=>
                    <CartCards key={cart.id} img={cart.img} alt={cart.alt} title={cart.title} price={cart.price} titlePriceClassName="flex flex-col h-full justify-start items-start gap-[10px]" className="cartImg flex items-start justify-start gap-[15px] pt-[20px] pb-[20px] border-b-2 border-[#f0f0f0] !w-[340px]" pClassName="text-[14px] hover:text-[#E55472] text-[#666] " spanClassName="!font-thin text-[14px] text-[#666]" imgClassName="w-[80px]" buttonIconClassName="bg-white hover:bg-[#E55472] w-[25px] rounded-[50%] shadow-sm cursor-pointer absolute left-[-5px] top-[-5px]" />
                    )}    
                    </div>
                    <div className="!w-[340px] pt-[15px] pb-[15px] flex item-center justify-between border-t-2 border-b-2 border-[#f0f0f0] gap-[20px]">
                        <h5 className="text-[16px] text-[#010101] !font-thin">Subtotal:</h5>
                        <span className="text-[#E55472] text-[16px] !font-thin">
                        $310.00</span>
                    </div>
                    <div className="!w-[340px] pt-[25px] pb-[15px] flex item-center justify-between gap-[20px] ">
                        <Link to="/" className="text-[13px] text-[#fff] text-center hover:text-[#212529] bg-[#E55472] hover:bg-[#565656] pt-[10px] pb-[10px] pr-[20px] pl-[20px]">VIEW CART</Link>
                        <Link to="/" className="text-[13px] text-[#fff] text-center hover:text-[#212529] bg-[#565656] hover:bg-[#E55472] pt-[10px] pb-[10px] pr-[20px] pl-[20px]">CHECKOUT</Link>
                    </div>
                    <p className="text-[#000] text-[14px] !font-thin">Free Shipping on All Orders Over $100!</p>
                </div>
            </div>
        </>
    )
}

export default CartBar
