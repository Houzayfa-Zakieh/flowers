import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar,faClose } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Product from '../../assets/images/products1.webp';
import { useState } from 'react';
import UseStore3 from '../../assets/UseStore3';
const ProductsInfo = () => {
    const {show , toggleShow} = UseStore3();
    const [count, setCount] = useState(1);
    return (
        <>
            <div className={`bg-[#00000099] flex items-center fixed left-0 justify-center h-[100vh] w-[100%] !overflow-y-scroll ${show ? "translate-y-0 top-0 z-1000" : " top-[-1] z-1000 -translate-y-full"}`}>
                <div className="bg-[#fff] p-[30px] flex items-center justify-center md:w-[1000px] sm:w-[600px] relative flex-wrap gap-[40px]">
                    <img src={Product} alt="product" className='w-[440px]' />
                    <div className='flex items-start justify-start min-h-[100%] flex-col gap-[30px]'>
                        <h3 className='text-[#010101] text-[40px]'>Pink Flower Tree Red</h3>
                        <div className='flex gap-[10px] items-start justify-start flex-col'>
                            <div className='flex items-center w-[100%] gap-[50px] mt-[-10px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='text-[#E55472] text-[26px]'>$49.00 </p>
                                    <del className='text-[#E55472] text-[20.8px]'>$65.00</del>
                                </div>
                                <div className='text-[12px] text-[gold]'>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <Link to="/">( 95 Reviews )</Link>
                                </div>
                            </div>
                            <p className='text-[#000] text-[16px] !font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Dignissimos repellendus repudiandae incidunt <br /> quidem pariatur expedita, quo quis modi tempore non.</p>
                        </div>
                        <div className='flex items-start justify-start flex-col gap-[30px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[#010101] text-[16px]'>Color</span>
                                <div className='flex gap-[5px]'>
                                    <Link to="/" className='w-[30px] h-[30px] border-[0.5px] border-[#666] rounded-[50%] bg-[#e55472]'></Link>
                                    <Link to="/" className='w-[30px] h-[30px] border-[0.5px] border-[#666] rounded-[50%] bg-[#9ac45c]'></Link>
                                    <Link to="/" className='w-[30px] h-[30px] border-[0.5px] border-[#666] rounded-[50%] bg-[#6d5cc4]'></Link>
                                    <Link to="/" className='w-[30px] h-[30px] border-[0.5px] border-[#666] rounded-[50%] bg-[#fff]'></Link>
                                    <Link to="/" className='w-[30px] h-[30px] border-[0.5px] border-[#666] rounded-[50%] bg-[#f00]'></Link>
                                    <Link to="/" className='w-[30px] h-[30px] border-[0.5px] border-[#666] rounded-[50%] bg-[#ff0]'></Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[#010101] text-[16px]'>Size</span>
                                <div className='text-[16px] text-[#666] flex !font-thin gap-[20px]'>
                                    <Link to="/" className='hover:text-[#e55472]'>S</Link>
                                    <Link to="/" className='hover:text-[#e55472]'>M</Link>
                                    <Link to="/" className='hover:text-[#e55472]'>L</Link>
                                    <Link to="/" className='hover:text-[#e55472]'>XL</Link>
                                    <Link to="/" className='hover:text-[#e55472]'>XXL</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[10px] items-center'>
                            <div className='flex items-center justify-around h-[40.84px] w-[133.07px] bg-[#f7f7f7]'>
                                <button className='text-[20px] text-[#666] cursor-pointer' onClick={() => setCount(count - 1)}>-</button>
                                <p className='text-[20px] text-[#666] !font-thin'>{count}</p>
                                <button className='text-[20px] text-[#666] cursor-pointer' onClick={() => setCount(count + 1)}>+</button>
                            </div>
                            <Link to="/" className="text-[13px] text-[#fff] text-center hover:text-[#212529] cartButtons1 pt-[10px] pb-[10px] pr-[20px] pl-[20px]">ADD TO CART</Link>
                            <div className='text-[#212529] text-center cursor-pointer text-[14px] cartButtons3 pt-[13px] pb-[13px] pr-[20px] pl-[20px]'>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                        <div className='flex gap-[15px] text-[16px] text-[#666]'>
                            <span className='text-[#010101] text-[16px]'>Share:</span>
                            <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faPinterest} /></a>
                            <a href=""><FontAwesomeIcon className='text-[16px] text-[#666] hover:text-[#E55472]' icon={faInstagram} /></a>
                        </div>
                    </div>

                <button className='text-[#fff] cursor-pointer bg-[#e55472] !h-[40px] w-[40px] absolute top-[10px] right-[10px]' onClick={toggleShow}><FontAwesomeIcon icon={faClose}/></button>
                </div>
            </div>
        </>
    )
}

export default ProductsInfo
