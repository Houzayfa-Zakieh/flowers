import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import UseStore3 from "../../../assets/UseStore3";
const ProductsCard = (props) => {
    const {show , toggleShow} = UseStore3();
    return (
        <>
            <div className="w-[288px] productsCard relative flex items-center justify-center">
                <div>
                    <div>
                        <Link to="/">
                            <img src={props.img} alt={props.alt} className="w-full" />
                        </Link>
                        <div>
                            <ul>
                                <li className={props.offerClassName}>{props.offer}</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="cardButtons opacity-0 absolute bottom-0 transform translate-y-[-35px] flex w-full flex-grow-1 flex-shrink-0 flex-basis-auto -webkit-box">
                                <li className=" bg-[#666] hover:bg-[#E55472] w-[74px] flex items-center justify-center text-center cursor-pointer h-[50px]" onClick={toggleShow}>
                                    <button to="/"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#fff] cursor-pointer w-[20px]" /></button>
                                </li>
                                <li className="bg-[#666] border-r-[0.5px] border-dotted border-[#f9f9f9] flex items-center justify-center !text-center cursor-pointer w-[140px] h-[50px] hover:bg-[#E55472] border-l-[0.5px] border-dotted">
                                    <button to="/" className="text-[#fff] !font-thin text-[14px] cursor-pointer">ADD TO CART</button>
                                </li>
                                <li className="bg-[#666] hover:bg-[#E55472] w-[74px] text-center h-[50px] flex items-center justify-center cursor-pointer" onClick={toggleShow}>
                                    <button to="/"><FontAwesomeIcon icon={faShuffle} className="text-[#fff] w-[20px] cursor-pointer" /></button>
                                </li>
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
                    <div className="flex items-center justify-center flex-col gap-[10px] pt-[25px]">
                        <h2 className="text-[14px] text-[#010101] !font-thin hover:text-[#E55472]"><Link>{props.productTitle}</Link> </h2>
                        <div className="flex items-center justify-center gap-[20px]">
                            <span className="text-[16px] text-[#666]">{props.price}</span>
                            <del className="text-[12.8px] text-[#666]">{props.del}</del>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard
