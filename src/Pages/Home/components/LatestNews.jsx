import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import LatestNewsImage from '../../../assets/images/LatestNews.webp';
import LatestNewsCard from './LatestNewsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const LatestNews = () => {
    const LatestNewsData = [
        { id : 1 , img: LatestNewsImage , alt:"Comments" , history:"Nov 18 , 2020" , commentNumbers:2 , commentTitle :"Lorem ipsum dolor sit amet con adipisicing elit sed"},
        { id : 2 , img: LatestNewsImage , alt:"Comments" , history:"Nov 18 , 2020" , commentNumbers:2 , commentTitle :"Lorem ipsum dolor sit amet con adipisicing elit sed"},
        { id : 3 , img: LatestNewsImage , alt:"Comments" , history:"Nov 18 , 2020" , commentNumbers:2 , commentTitle :"Lorem ipsum dolor sit amet con adipisicing elit sed"},
        { id : 4 , img: LatestNewsImage , alt:"Comments" , history:"Nov 18 , 2020" , commentNumbers:2 , commentTitle :"Lorem ipsum dolor sit amet con adipisicing elit sed"},
        { id : 5 , img: LatestNewsImage , alt:"Comments" , history:"Nov 18 , 2020" , commentNumbers:2 , commentTitle :"Lorem ipsum dolor sit amet con adipisicing elit sed"},
    ];
      const [swiperInstance, setSwiperInstance] = useState(null);
      const prevRef = useRef(null);
      const nextRef = useRef(null);
    
      useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
          swiperInstance.params.navigation.prevEl = prevRef.current;
          swiperInstance.params.navigation.nextEl = nextRef.current;
          swiperInstance.navigation.destroy();
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }
      }, [swiperInstance]);
    
    return (
        <>
            <div className='w-[100%] ml-[70px] min-h-[20vh] flex items-center justify-center flex-col gap-[40px] pb-[20px] pt-[60px]'>

                <div className='flex flex-col items-center justify-center gap-[20px]'>
                    <h1 className='text-[#010101] text-[40px] !font-extrabold'>latest news</h1>
                    <div className='w-[90px] h-[2px] bg-[#E55472]'></div>
                </div>
                <div className="topProducts min-h-[20vh] w-full flex items-center justify-center group">
                    <div className="container mx-auto relative">
                        <Swiper
                            onSwiper={setSwiperInstance}
                            slidesPerView={3}
                            spaceBetween={20}
                            loop={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                250: { slidesPerView: 1 },
                                700: { slidesPerView: 1 },
                                760: { slidesPerView: 2 },
                                1050: { slidesPerView: 2 },
                                1270: { slidesPerView: 3 }
                            }}>
                            {LatestNewsData.map((latest) => (
                                <SwiperSlide className="text-center flex items-center justify-center mySwiperSlide" key={latest.id}>
                                    <LatestNewsCard img={latest.img} alt={latest.alt} history={latest.history} commentNumbers={latest.commentNumbers} commentTitle={latest.commentTitle}  />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='swiper-navigation'>
                            <button ref={prevRef} className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto p-[15px] bg-[#fff] border border-[#dbdbdb] rounded-[50%] hover:bg-[#E55472] shadow-sm cursor-pointer">
                                <FontAwesomeIcon icon={faArrowLeft} className="text-[#666] hover:text-[#fff] text-xl" />
                            </button>
                        </div>
                        <div className='swiper-navigation'>
                            <button ref={nextRef} className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto p-[15px] bg-[#fff] border border-[#dbdbdb] rounded-[50%] hover:bg-[#E55472] shadow-sm cursor-pointer">
                                <FontAwesomeIcon icon={faArrowRight} className="text-[#666] hover:text-[#fff] text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews
