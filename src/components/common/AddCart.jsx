import Product from '../../assets/images/products1.webp';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { UseStore5 } from '../../assets/UseStore3';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Payment2 from '../../assets/images/payment2.webp';
const AddCart = () => {
    const { show2, toggleShow2 } = UseStore5();

    return (
        <>
            <div className={`bg-[#00000033] fixed inset-0 flex items-center justify-center overflow-x-hidden transition-transform duration-300 ${show2 ? "translate-y-0 z-1001" : "-translate-y-full z-1001"}`}>
                <div className="bg-white p-[30px] flex flex-col  items-center md:items-start justify-center relative gap-[20px] translate-y-[-25%]">
                    <div className='flex items-center w-[100%] justify-center gap-[20px]'>
                        <div className='w-[125px]'>
                            <img src={Product} alt="product" />
                        </div>
                        <div className='flex items-start justify-start flex-col gap-[10px] pr-[20px]'>
                            <Link to="/" className='text-[#010101] text-[18px] hover:text-[#E55472]'><h5 className='!font-thin'>Heart's Desire</h5></Link>
                            <p className="text-[#000] text-[16px] !font-thin"><FontAwesomeIcon icon={faCheckCircle} className='text-[green]' /> Successfully added to your Cart</p>
                            <div className="pt-[25px] pb-[15px] flex item-center justify-between gap-[10px] ">
                                <Link to="/" className="text-[#fff] text-center hover:text-[#212529] cartButtons1 text-[14px] px-[20px] py-[5px]">VIEW CART</Link>
                                <Link to="/" className="text-[#fff] text-center hover:text-[#212529] cartButtons2 text-[14px] px-[20px] py-[5px]">CHECKOUT</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] border-t border-[#dcdcdc] pt-[30px] flex items-center justify-center flex-col gap-[24px]'>
                        <p className='text-[#000] text-[16px] text-center !font-thin'>We want to give you 10% discount for your first order,<br />
                            Use (fiama10) discount code at checkout</p>
                        <img src={Payment2} alt="payment ways" />
                    </div>
                    <button className="absolute cursor-pointer top-2 right-2 text-white bg-[#e55472] h-10 w-10" onClick={toggleShow2}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>

        </>
    )
}

export default AddCart
