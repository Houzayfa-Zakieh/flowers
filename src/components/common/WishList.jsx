import Product from '../../assets/images/products1.webp';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { UseStore4 } from '../../assets/UseStore3';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const WishList = () => {
    const { show1, toggleShow1 } = UseStore4();

    return (
        <>
            <div className={`bg-[#00000033] fixed inset-0 flex items-center justify-center overflow-x-hidden transition-transform duration-300 ${show1 ? "translate-y-0 z-1001" : "-translate-y-full z-1001"}`}>
                <div className="bg-white p-[30px] flex flex-col md:flex-row items-center md:items-start justify-center relative gap-[20px] translate-y-[-85%]">
                    <div className='w-[125px]'>
                        <img src={Product} alt="product" />
                    </div>
                    <div className='flex items-start justify-start flex-col gap-[20px] pr-[20px]'>
                        <Link to="/products" className='text-[#010101] text-[18px] hover:text-[#E55472]'><h5 className='!font-thin'>Brake Conversion Kit</h5></Link>
                        <p className="text-[#000] text-[16px] !font-thin"><FontAwesomeIcon icon={faCheckCircle} className='text-[green]'/> Successfully added to your <br /> Wishlist</p>
                        <Link to="#" className='cartButtons1 text-center text-[#fff] text-[14px] px-[20px] py-[5px] hover:text-[#666]'>View Wishlist</Link>
                    </div>
                    <button className="absolute cursor-pointer top-2 right-2 text-white bg-[#e55472] h-10 w-10" onClick={toggleShow1}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default WishList
