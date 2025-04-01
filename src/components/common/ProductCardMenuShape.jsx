import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { UseStore3 } from "../../assets/UseStore3";
import { UseStore5 } from "../../assets/UseStore3";

const ProductCardMenuShape = (props) => {
    const { show, toggleShow } = UseStore3();
    const { show2, toggleShow2 } = UseStore5();
    return (
        <>
            <div className="w-[100%] productsCard flex items-center justify-center">
                <div className="w-[950px] flex-wrap lg:flex-nowrap flex gap-[30px] lg:items-start lg:justify-start justify-center items-center relative">
                    <Link to="/" className="w-[50%] h-[60%]">
                        <img src={props.img} alt={props.alt} className="w-[100%] h-[100%]" />
                    </Link>
                    <div className="flex items-start justify-start flex-col gap-[20px] w-[50%]">
                        <div>
                            <div>
                                <ul>
                                    <li className={props.offerClassName}>{props.offer}</li>
                                </ul>
                            </div>

                            <div className="Timer absolute right-0 top-[80px] pt-[10px] pb-[10px] w-[50px] border-1 border-[#f0f0f0]">
                                <div className="flex flex-col pt-[5px] pb-[5px]">
                                    <div className="text-[14px] text-[#010101] text-center !font-thin">{props.DaysTimerNumber}</div>
                                    <div className="text-[10px] text-[#000] text-center !font-thin">{props.DaysTimer}</div>

                                </div>
                                <div className="flex flex-col pt-[5px] pb-[5px] border-t border-[#f0f0f0]">
                                    <div className="text-[14px] text-[#010101] text-center !font-thin">{props.HrsTimerNumber}</div>
                                    <div className="text-[10px] text-[#000] text-center !font-thin"> {props.HrsTimer}</div>

                                </div>
                                <div className="flex flex-col pt-[5px] pb-[5px] border-t border-[#f0f0f0]">
                                    <div className="text-[14px] text-[#010101] text-center !font-thin">{props.MinsTimerNumber}</div>
                                    <div className="text-[10px] text-[#000] text-center !font-thin"> {props.MinsTimer}</div>
                                </div>
                                <div className="flex flex-col pt-[5px] pb-[5px] border-t border-[#f0f0f0]">
                                    <div className="text-[14px] text-[#010101] text-center !font-thin">{props.SecsTimerNumber}</div>
                                    <div className="text-[10px] text-[#000] text-center !font-thin">{props.SecsTimer}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start justify-start flex-col gap-[10px] pt-[25px]">
                            <h2 className="text-[22px] text-[#010101] hover:text-[#E55472]"><Link className="!font-thin">{props.productTitle}</Link> </h2>
                            <div className="flex items-center justify-center gap-[20px]">
                                <span className="text-[16px] text-[#666]">{props.price}</span>
                                <del className="text-[12.8px] text-[#666]">{props.del}</del>
                            </div>
                        </div>
                        <div className="flex gap-[5px]">
                            {[faStar, faStar, faStar, faStar, faStar].map((star, index) => (
                                <FontAwesomeIcon key={index} className="text-[16px] text-[#666] cursor-pointer hover:text-[#e55472]" icon={star} />
                            ))}

                        </div>
                        <div>
                            <p className="text-[16px] text-[#000] leading-[2.5]	">{props.paragraph}</p>
                        </div>
                        <div>
                            <ul className="flex w-full flex-grow-1 flex-shrink-0 flex-basis-auto -webkit-box">
                                <li className=" bg-[#666] hover:bg-[#E55472] w-[65px] flex items-center justify-center text-center cursor-pointer h-[45px]" onClick={toggleShow} title="Quick View">
                                    <button to="/"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#fff] cursor-pointer w-[20px]" /></button>
                                </li>
                                <li className="bg-[#666] border-r-[0.5px] border-dotted border-[#f9f9f9] flex items-center justify-center !text-center cursor-pointer w-[120px] h-[45px] hover:bg-[#E55472] border-l-[0.5px] border-dotted cursor-pointer" title="Add to Cart" onClick={toggleShow2}>
                                    <button to="/" className="text-[#fff] !font-thin text-[14px] cursor-pointer">ADD TO CART</button>
                                </li>
                                <li className="bg-[#666] hover:bg-[#E55472] w-[65px] text-center h-[45px] flex items-center justify-center cursor-pointer" onClick={toggleShow} title="Quick View">
                                    <button to="/"><FontAwesomeIcon icon={faShuffle} className="text-[#fff] w-[20px] cursor-pointer" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCardMenuShape