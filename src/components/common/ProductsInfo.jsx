import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faClose } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Product from '../../assets/images/products1.webp';
import { useState } from 'react';
import {UseStore3} from '../../assets/UseStore3';
import {UseStore4} from '../../assets/UseStore3';
import {UseStore5} from '../../assets/UseStore3';

const ProductsInfo = () => {
    const { show, toggleShow } = UseStore3();
    const { show1, toggleShow1 } = UseStore4();
    const { show2, toggleShow2 } = UseStore5();

    const [count, setCount] = useState(1);

    return (
        <div className={`bg-[#00000099] fixed inset-0 flex items-center justify-center overflow-x-hidden transition-transform duration-300 ${show ? "translate-y-0 z-1000" : "-translate-y-full z-1000"}`}>
            <div className="bg-white p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-center w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto relative gap-[20px]">
                <div className="w-full md:w-1/2 flex-shrink-0 pt-[100px] md:pt-[0] md:mb-0">
                    <img src={Product} alt="product" className="w-full h-auto max-h-[350px] md:max-h-full object-contain" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-[20px] p-2">
                    <h3 className="text-xl md:text-3xl !font-thin text-[#010101]">Pink Flower Tree Red</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <p className="text-xl md:text-2xl text-[#E55472]">$49.00</p>
                                <del className="text-lg md:text-xl !font-thin text-[#E55472]">$65.00</del>
                            </div>
                            <div className="flex items-center gap-1 text-xs md:text-sm text-[gold]">
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
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-1">
                            <span className="text-base text-[#010101]">Color :</span>
                            <div className="flex gap-2">
                                {["#e55472", "#9ac45c", "#6d5cc4", "#fff", "#f00", "#ff0"].map((color, index) => (
                                    <Link key={index} to="/" className="w-8 h-8 border border-[#666] hover:border-[#E55472] rounded-full" style={{ backgroundColor: color }}></Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span className="text-base text-[#010101]">Size :</span>
                            <div className="flex gap-[20px]">
                                {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                                    <Link key={index} to="/" className="hover:text-[#e55472] text-base text-[#666]">
                                        {size}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
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
                <button className="absolute cursor-pointer top-2 right-2 text-white bg-[#e55472] h-10 w-10" onClick={toggleShow}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
        </div>
    );
};

export default ProductsInfo;
