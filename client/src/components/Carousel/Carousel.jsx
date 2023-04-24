import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css"

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/col fiver.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel=()=>{
    return(
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="imageSlide" src={image1} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="imageSlide" src={image2} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="imageSlide" src={image3} alt="slide" />
                </SwiperSlide>
        
            </Swiper>

        </>
    )
}

export default Carousel;