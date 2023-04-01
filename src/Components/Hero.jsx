import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import rec1 from "../asset/rec1.png"
import rec2 from "../asset/rec2.png"
import rec3 from "../asset/rec3.png"

const Hero = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={rec1} alt="img1"></img></SwiperSlide>
        <SwiperSlide><img src={rec2} alt="img1"></img></SwiperSlide>
        <SwiperSlide><img src={rec3} alt="img1"></img></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Hero