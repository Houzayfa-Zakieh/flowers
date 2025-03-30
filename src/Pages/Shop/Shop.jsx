import { useEffect } from "react"
import GoBackToLastPage from "../../components/common/GoBackToLastPage";
import Filter from "./components/Filter";
import '../../assets/styles/shop.css';
import CardsComponent from './components/CardsComponent'
import Select from "./components/Select";
const Shop = () => {
    useEffect(() => {
        document.title = "Fiama - Flower Shop eCommerce HTML Template";
    }, []);

    return (
        <>
            <GoBackToLastPage pageName="Shop Left Sidebar" pageTitle="Shop" />
            <div className="container flex items-center justify-center mx-auto p-[70px]">
                <div className="flex items-start justify-start flex-wrap md:flex-nowrap gap-[20px]">
                    <Filter />
                    <div className="flex items-start justify-start flex-col">
                        <div className="flex items-center w-[100%] justify-between mb-[20px] px-[40px]">
                            <p className="!font-thin">Showing 9 of 20 results</p>
                            <div>
                                <Select />
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <CardsComponent />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Shop
