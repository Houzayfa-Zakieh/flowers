import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductsCardMenu from "../../../components/common/ProductsCardMenu";
import CardsComponent from '../components/CardsComponent'
import Select from "../components/Select";

const ShopProductsComponent = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <div className="flex items-center justify-center w-[100%] gap-[20px] px-[20px]">
                <div className="flex items-start justify-start flex-col flex-wrap">
                    <div className="flex items-center w-[100%] justify-between flex-wrap">
                        <p className="!font-thin">Showing 9 of 20 results</p>
                        <div className="flex items-center">
                            <Select />
                            <div className="p-4">
                                <div className="flex gap-[15px] space-x-2">
                                    <button onClick={() => { if (activeTab !== "tab1") setActiveTab("tab1"); }} className={`cursor-pointer hover:text-[#e55472] w-[45px] h-[45px] transition-colors ${activeTab === "tab1" ? "bg-[#e55472] text-[#fff] border-1 border-[#e55472]" : "bg-[#fff] text-[#666] border-[#dfdfdf] border-1 cursor-pointer"}`}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </button>

                                    <button onClick={() => { if (activeTab !== "tab2") setActiveTab("tab2"); }} className={`cursor-pointer w-[45px] h-[45px] hover:text-[#e55472] transition-colors ${activeTab === "tab2" ? "bg-[#e55472] text-[#fff] border-1 border-[#e55472]" : "bg-[#fff] text-[#666] border-[#dfdfdf] border-1 "}`}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        {activeTab === "tab1" && (
                            <div className="lg:w-[950px] flex items-center justify-center flex-wrap">
                                <CardsComponent />
                            </div>
                        )}
                        {activeTab === "tab2" && (
                            <div className="lg:w-[950px] flex items-center justify-center flex-wrap">
                           <ProductsCardMenu />
                        </div>
                            
                        )}
                    </div>
                    <div className="items-container flex items-center justify-center w-[100%] gap-[15px] mt-[40px]">
                        {[faArrowLeft, 1, 2, 3, "...", faArrowRight].map((item, index) =>
                            <div key={index} className="item flex items-center justify-center bg-[#f6f6f6] text-[13px] rounded-[50%] text-[#666] hover:bg-[#e55472] hover:text-[#fff] cursor-pointer w-[45px] h-[45px]">
                                {typeof item === "object" ? (<FontAwesomeIcon icon={item} />) : (<p>{item}</p>)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopProductsComponent
