import SwiperComponent from './components/SwiperComponent';
import FeaturesComponent from '../Home/components/FeaturesComponent';
import BannerComponent from '../Home/components/BannerComponent';
import ProductsComponent from './components/ProductsComponent';
import TopProducts from './components/TopProducts';
import '../../assets/styles/home.css';
import { useEffect } from "react";
import LatestNews from './components/LatestNews';
const Home = () => {
    useEffect(() => {
        document.title = "Fiama - Flower Shop eCommerce HTML Template";
    }, []);
    return (
        <>
            <SwiperComponent className='w-[100%]' />
            <FeaturesComponent />
            <div className=' w-[100%] p-[20px]  overflow-hidden'>
                <div className='flex flex-col w-[100%] gap-[60px]'>
                    <BannerComponent />
                    <ProductsComponent />
                </div>
                <div className='flex flex-col w-[100%] items-center justify-center gap-[30px]'>
                    <TopProducts className=' w-[100%]' />
                    <LatestNews className='w-[100%]' />
                </div>
            </div>
        </>
    )
}
export default Home
