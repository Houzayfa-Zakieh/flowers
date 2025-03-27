import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductsCard from "../components/ProductsCard";
import Products1 from '../../../assets/images/products1.webp';
import TopProducts2 from '../../../assets/images/TopProducts2.webp';


const TopProducts = () => {
  const topProductsData = [
    { id: 1, img: Products1, alt: "Products1", offer: "10%", productTitle: "PINK FLOWER TREE", price: "$18.00 ", del: "$21.00" },
    { id: 2, img: Products1, alt: "Products2", offer: "HOT", productTitle: "PREMIUM JOYFUL", price: "$18.00 " },
    { id: 3, img: Products1, alt: "Products3", offer: "12%", productTitle: "THE WHITE ROSE", price: "$16.00", del: "$19.00" },
    { id: 4, img: Products1, alt: "Products4", offer: "HOT", productTitle: "RED ROSE BOUQUET", price: "$20.00" },
    { id: 5, img: Products1, alt: "Products5", offer: "HOT", productTitle: "HEART'S DESIRE", price: "$15.00" }
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
      <div className='w-screen min-h-[20vh] flex items-center justify-center flex-col gap-[60px]'>

        <div className='flex flex-col items-center justify-center gap-[20px]'>
          <h1 className='text-[#010101] text-[40px] !font-extrabold'>top products</h1>
          <div className='w-[90px] h-[2px] bg-[#E55472]'></div>
        </div>
        <div className="topProducts min-h-[20vh] w-full flex items-center justify-center group">
          <div className="container mx-auto relative">
            <Swiper
              onSwiper={setSwiperInstance}
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                250: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1050: { slidesPerView: 3 },
                1270: { slidesPerView: 4 },
              }}>
              {topProductsData.map((product) => (
                <SwiperSlide className="text-center flex items-center justify-center mySwiperSlide" key={product.id}>
                  <ProductsCard
                  key={product.id}
                    img={product.img}
                    alt={product.alt}
                    offer={product.offer}
                    productTitle={product.productTitle}
                    price={product.price}
                    del={product.del}
                    offerClassName="absolute offer-bg left-0 top-[20px] bg-[#E55472] !font-bold pt-[1px] pb-[1px] pr-[15px] pl-[15px] text-[13px] text-[#fff] rounded-[0 3px 3px 0]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='swiper-navigation'>
              <button
                ref={prevRef}
                className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto p-[15px] bg-[#fff] border border-[#dbdbdb] rounded-[50%] hover:bg-[#E55472] shadow-sm cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-[#666] hover:text-[#fff] text-xl" />
              </button>
            </div>
            <div className='swiper-navigation'>
              <button
                ref={nextRef}
                className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto p-[15px] bg-[#fff] border border-[#dbdbdb] rounded-[50%] hover:bg-[#E55472] shadow-sm cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-[#666] hover:text-[#fff] text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className='w-screen flex items-center justify-center min-h-[20vh] pt-[40px]'>
          <img src={TopProducts2} className='w-[1400px] product2' alt="Top Products" />
        </div>
      </div>

    </>
  );
};

export default TopProducts;