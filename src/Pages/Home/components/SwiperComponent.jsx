import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import UseWindowSize from '../../../components/common/UseWindowSize';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import homeSlide2 from '../../../assets/images/homeSlide2.webp';
import homeSlide1 from '../../../assets/images/homeSlide1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SwiperComponent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // تخفيض قيمة threshold لتظهر الحركات مبكرًا (مثلاً 0.3) على الشاشات الصغيرة
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const size = UseWindowSize();

  return (
    <>
      <div className="relative group w-full h-[80vh]">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            clickable: true,
          }}
          effect={'fade'}
          spaceBetween={20}
          loop={true}
          className="mySwiper w-full h-full">
          <SwiperSlide className="mySwiperSlide bg-cover bg-center bg-no-repeat flex-wrap w-full h-full !flex items-center justify-center pt-24 pb-24" style={{ backgroundImage: `url(${homeSlide2})` }}>
            <div className="w-full !flex items-center justify-start pl-4 md:pl-[175px] pb-5">
              <div key={`${size.width}-${size.height}`} ref={ref} className="flex flex-col gap-5 pr-5 pl-5">
                <h1 style={{ transitionDelay: inView ? '1000ms' : '0ms' }} className={`text-[#434343] text-[72px] font-bold transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                  Fresh Flower
                </h1>
                <h6 style={{ transitionDelay: inView ? '2000ms' : '0ms' }} className={`text-[#666] text-[25px] font-thin transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Natural & Beautiful Flower Here
                </h6>
                <div style={{ transitionDelay: inView ? '2100ms' : '0ms' }} className={`w-[90px] h-[2px] bg-[#E55472] transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <p style={{ transitionDelay: inView ? '2200ms' : '0ms' }} className={`text-[16px] text-[#000] font-thin transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Cupiditate velit cumque necessitatibus maxime porro dolorum, cum quo.
                </p>
                <Link style={{ transitionDelay: inView ? '2300ms' : '0ms' }} to="/" className={`text-[#fff] w-[165px] bg-[#E55472] rounded-full text-center pt-[13px] pb-[13px] px-10 text-[16px] hover:bg-[#666] transform relative z-200 transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-cover bg-center bg-no-repeat p-5 flex-wrap w-full h-full !flex items-center justify-center pt-24 pb-24" style={{ backgroundImage: `url(${homeSlide1})` }} >
            <div className="w-full !flex items-center justify-start pl-4 md:pl-[175px] pb-5">
              <div key={`${size.width}-${size.height}`} ref={ref} className="flex flex-col gap-6 pr-5 pl-5">
                <h1 style={{ transitionDelay: inView ? '1000ms' : '0ms' }} className={`text-[#434343] text-[72px] font-bold transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                  Fresh Flower
                </h1>
                <h6 style={{ transitionDelay: inView ? '2000ms' : '0ms' }} className={`text-[#666] text-[25px] mt-[-20px] font-thin transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                  Natural & Beautiful Flower Here
                </h6>
                <div style={{ transitionDelay: inView ? '2100ms' : '0ms' }} className={`w-[90px] h-[2px] bg-[#E55472] transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <p style={{ transitionDelay: inView ? '2200ms' : '0ms' }} className={`text-[16px] text-[#000] font-thin transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Cupiditate velit cumque necessitatibus maxime porro dolorum, cum quo.
                </p>
                <Link style={{ transitionDelay: inView ? '2300ms' : '0ms' }} to="/" className={`text-[#fff] w-[165px] bg-[#E55472] rounded-full text-center pt-[13px] pb-[13px] px-10 text-[16px] hover:bg-[#666] transform transition-all duration-2000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 swiper-navigation opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto ml-10">
            <button ref={prevRef} className="p-4 bg-transparent border border-[#dbdbdb] hover:bg-[#E55472] transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeft} className="text-[#666] hover:text-[#fff] text-xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 swiper-navigation opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto mr-10">
            <button ref={nextRef} className="p-4 bg-transparent border border-[#dbdbdb] hover:bg-[#E55472] transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#666] hover:text-[#fff] text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperComponent;
