import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import products1 from '../../../assets/images/products1.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [
    { src: products1, alt: "Image 1" },
    { src: products1, alt: "Image 2" },
    { src: products1, alt: "Image 3" },
    { src: products1, alt: "Image 4" },
    { src: products1, alt: "Image 5" },
    { src: products1, alt: "Image 6" },
    { src: products1, alt: "Image 7" },
];

const SwiperComponent = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const mainSwiperRef = useRef(null);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setModalIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setModalIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleThumbnailClick = (index) => {
        if (thumbsSwiper) {
            thumbsSwiper.slideToLoop(index, 500);
        }
    };


    return (
        <div className="flex justify-center w-[600px] items-center h-[680px] gap-4 flex-wrap">
            <Swiper
                direction="vertical"
                slidesPerView={4}
                spaceBetween={30}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                modules={[Thumbs]}
                loop={true}
                className="min-w-[118px] h-[100%]">
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="cursor-pointer" onClick={() => handleThumbnailClick(index)}>
                        <img src={img.src} alt={img.alt} className="w-[100%] pb-[7px] h-[152px]" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                ref={mainSwiperRef}
                modules={[Thumbs, EffectFade]}
                thumbs={{ swiper: thumbsSwiper }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                className="w-3/4 h-[600px] mb-[80px]">
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div onClick={() => openModal(index)}>
                            <img src={img.src} alt={img.alt} className="cursor-pointer object-cover w-[450px]" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {isModalOpen && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#00000099] z-100">
                    <button className="absolute top-4 right-4 text-[#fff9] hover:text-[#fff] hover:shadow-lg shadow-[#fff] w-[38px] h-[38px] border-1 bg-transparent rounded-[50%] cursor-pointer" onClick={closeModal}>
                        ✕
                    </button>

                    <button className="absolute left-4 text-[#fff9] hover:text-[#fff] hover:shadow-lg shadow-[#fff] w-[46px] h-[46px] border-1 bg-transparent rounded-[50%] cursor-pointer" onClick={prevImage}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    <img src={images[modalIndex].src} alt={images[modalIndex].alt} className="max-h-[80%] max-w-[80%] mb-2" />

                    <p className="text-[11px] text-[#8cb2b2]">
                        {modalIndex + 1} / {images.length}
                    </p>

                    <p className="text-[13px] text-[#fff] mt-2">{images[modalIndex].alt}</p>

                    <button className="absolute right-4 text-[#fff9] hover:text-[#fff] hover:shadow-lg shadow-[#fff] border-1 bg-transparent rounded-[50%] w-[46px] h-[46px] cursor-pointer" onClick={nextImage}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SwiperComponent;
