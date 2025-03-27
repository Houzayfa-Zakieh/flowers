import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconsImage1 from '../../../assets/images/iconsImages1.webp';
import IconsImage2 from '../../../assets/images/iconsImages2.webp';
import IconsImage3 from '../../../assets/images/iconsImages3.webp';
import IconsImage4 from '../../../assets/images/iconsImages4.webp';
import IconsImage5 from '../../../assets/images/iconsImages5.webp';
import IconsImage6 from '../../../assets/images/iconsImages6.webp';
const IconsImagesSwiper = () => {
    const IconsData = [{ id: 1, img: IconsImage1, alt: "Icons" }, { id: 2, img: IconsImage2, alt: "Icons" }, { id: 3, img: IconsImage3, alt: "Icons" }, { id: 4, img: IconsImage4, alt: "Icons" }, { id: 5, img: IconsImage5, alt: "Icons" }, { id: 6, img: IconsImage6, alt: "Icons" }, { id: 7, img: IconsImage1, alt: "Icons" }]
    return (
        <>
            <div className='text-center flex items-center bg-[#f9f9f9] justify-center w-screen mt-[60px] p-0'>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper w-screen h-full text-center flex items-center justify-center"
                    breakpoints={{
                        250: { slidesPerView: 2 },
                        563: { slidesPerView: 3 },
                        761: { slidesPerView: 4 },
                        1050: { slidesPerView: 6 },
                    }}>
                    {IconsData.map((icons) => (
                        <SwiperSlide className="w-full h-full text-center flex items-center justify-center mySwiperSlide pt-[35px] pb-[35px] pr-[15px] pl-[15px]" key={icons.id}>
                            <img src={icons.img} className='h-full swiperIcons' key={icons.id} alt={icons.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default IconsImagesSwiper
