import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiperimg = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={true}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://plus.unsplash.com/premium_photo-1673203734665-0a534c043b7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1519678962078-9b26c2d843b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1551893665-f843f600794e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxwbGFudHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1444342679470-e4512355de5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxwbGFudHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1433940592492-216cd6e28a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxwbGFudHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperimg;
