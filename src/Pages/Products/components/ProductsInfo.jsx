import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faClose } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UseStore4 } from '../../../assets/UseStore3';
import { UseStore5 } from '../../../assets/UseStore3';
const ProductsInfo = () => {
    const [count, setCount] = useState(1);
    const { show1, toggleShow1 } = UseStore4();
    const { show2, toggleShow2 } = UseStore5();


    return (
        <>
                <div className="bg-white flex flex-col items-start justify-start gap-[20px]">
                    <div className="w-[100%] md:w-3/4 flex flex-col gap-[20px] p-2">
                        <h3 className="text-xl md:text-3xl !font-thin text-[#010101]">Pink Flower Tree Red</h3>
                        <div className="flex flex-col gap-2 flex-wrap">
                            <div className="flex items-center justify-start gap-[40px] flex-wrap">
                                <div className="flex items-center gap-2">
                                    <p className="text-xl md:text-2xl text-[#E55472]">$49.00</p>
                                    <del className="text-lg md:text-xl !font-thin text-[#E55472]">$65.00</del>
                                </div>
                                <div className="flex items-center gap-1 text-xs md:text-sm text-[gold] flex-wrap">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className='!font-thin cursor-pointer' />
                                    ))}
                                    <Link to="/" className='!font-thin hover:text-[#E55472]'>(95 Reviews)</Link>
                                </div>
                            </div>
                        </div>
                        <p className="md:text-[16px] text-[#000] !font-thin">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus
                            repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.
                        </p>
                        <div className="flex flex-col gap-[30px] flex-wrap">
                            <div className="flex flex-col gap-1 flex-wrap">
                                <span className="text-base text-[#010101]">Color :</span>
                                <div className="flex gap-2 flex-wrap">
                                    {["#e55472", "#9ac45c", "#6d5cc4", "#fff", "#f00", "#ff0"].map((color, index) => (
                                        <Link key={index} to="/" className="w-8 h-8 border border-[#666] hover:border-[#E55472] rounded-full" style={{ backgroundColor: color }}></Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] flex-wrap">
                                <span className="text-base text-[#010101]">Size :</span>
                                <div className="flex gap-[20px] flex-wrap">
                                    {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                                        <Link key={index} to="/" className="hover:text-[#e55472] text-base text-[#666]">
                                            {size}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center justify-around h-[48px] h-10 w-32 bg-[#f7f7f7]">
                                <button className="text-xl text-[#666] cursor-pointer" onClick={() => setCount(count > 1 ? count - 1 : 1)}> - </button>
                                <p className="text-xl text-[#666] !font-thin">{count}</p>
                                <button className="text-xl text-[#666] cursor-pointer" onClick={() => setCount(count + 1)}> + </button>
                            </div>
                            <button to="/" className="cursor-pointer text-white text-sm py-2 px-4 h-[48px] text-center flex items-center justify-center cartButtons1 hover:text-[#666]" onClick={toggleShow2} title='Add to Cart'>
                                ADD TO CART
                            </button>
                            <div className="text-[#666] hover:text-[#E55472] text-sm cartButtons3 p-2 rounded cursor-pointer text-center h-[48px] flex items-center w-[48px] justify-center" onClick={toggleShow1} title='Add to Wishlist'>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <span className="text-base text-[#010101]">Share :</span>
                            {[faFacebook, faTwitter, faPinterest, faInstagram].map((icon, index) => (
                                <a key={index} href="">
                                    <FontAwesomeIcon className="text-base text-[#666] hover:text-[#e55472]" icon={icon} />
                                </a>
                            ))}
                        </div>
                </div>
            </div>
        </>
    )
}

export default ProductsInfo
