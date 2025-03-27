import Banner from '../components/Banner';
import Banner1 from '../../../assets/images/banner.webp';

const BannerComponent = () => {

    const banners = [Banner1, Banner1, Banner1]

    return (
        <>
            <div className='Banner w-screen flex  items-center justify-center mt-[60px] min-h-[20vh] '>
                <div className='flex flex-wrap items-center justify-evenly gap-[50px]'>
                    {banners.map((banner, index) =>
                        <Banner key={index} img={banner} className="w-[400px] banner" />)}
                </div>
            </div>
        </>
    )
}

export default BannerComponent
