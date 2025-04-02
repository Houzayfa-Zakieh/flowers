import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import products1 from "../../../assets/images/products1.webp";
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const nextImage = () =>
        setModalIndex((prev) => (prev + 1) % images.length);

    const prevImage = () =>
        setModalIndex((prev) => (prev - 1 + images.length) % images.length);

    const handleThumbnailClick = (index) => {
        if (thumbsSwiper) {
            thumbsSwiper.slideToLoop(index, 500);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
            <Swiper
                direction={isMobile ? "horizontal" : "vertical"}
                slidesPerView={4}
                spaceBetween={10}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                modules={[Thumbs]}
                loop={true}
                className={isMobile ? "w-[300px] h-[80px] mb-4" : "w-[118px] h-[680px]"}>
                {images.map((img, index) => (
                    <SwiperSlide key={index} onClick={() => handleThumbnailClick(index)} className="cursor-pointer">
                        <img src={img.src} alt={img.alt} className="w-[100%] h-[100%] object-cover" />
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
                className={isMobile ? "w-[300px] h-[400px]" : "w-[450px] h-[680px]"}>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div onClick={() => openModal(index)}>
                            <img src={img.src} alt={img.alt} className="w-[100%] h-[100%] object-cover cursor-pointer" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isModalOpen && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 z-50 p-4">
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
