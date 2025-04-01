import { useEffect } from "react"
import GoBackToLastPage from "../../components/common/GoBackToLastPage";
import Filter from "./components/Filter";
import '../../assets/styles/shop.css';
import ShopProductsComponent from "./components/ShopProductsComponent";

const Shop = () => {
    useEffect(() => {
        document.title = "Fiama - Flower Shop eCommerce HTML Template";
    }, []);


    return (
        <>
            <GoBackToLastPage pageName="Shop Left Sidebar" pageTitle="Shop" />
            <div className=" flex items-center justify-center p-[78px] ">
                <div className="flex items-start justify-center flex-wrap xl:flex-nowrap gap-[50px]">
                    <div className="order-2 xl:order-1">
                        <Filter />
                    </div>
                    <div className="order-1 xl:order-2">
                        <ShopProductsComponent />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shop
