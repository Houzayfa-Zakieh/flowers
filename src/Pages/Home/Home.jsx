import SwiperComponent from './components/SwiperComponent';
import FeaturesComponent from '../Home/components/FeaturesComponent';
import BannerComponent from '../Home/components/BannerComponent';
import ProductsComponent from './components/ProductsComponent';
import TopProducts from './components/TopProducts';
import '../../assets/styles/home.css';
import { useEffect } from "react";
import LatestNews from './components/LatestNews';
import IconsImagesSwiper from './components/IconsImagesSwiper';
const Home = () => {
    useEffect(() => {
        document.title = "Fiama - Flower Shop eCommerce HTML Template";
    }, []);
    return (
        <>
                <SwiperComponent />
            <div className='container w-screen p-[20px]'>
                <FeaturesComponent />
                <div className='flex flex-col gap-[60px] '>
                    <BannerComponent />
                    <ProductsComponent />
                </div>
                <TopProducts />
                <LatestNews/>
            </div>
                <IconsImagesSwiper/>

        </>
    )
}
export default Home
