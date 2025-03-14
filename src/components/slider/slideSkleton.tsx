import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export const SlideSkeleton = () => {
  return (
    <div className="w-full p-4 min-h-[700px] bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center py-12">
      <Swiper
        effect="coverflow"
        centeredSlides
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 2 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-[1200px]">
        {[...Array(5)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="flex w-[500px] flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 transform transition-transform duration-300">
            <div className="w-[600px] mx-auto sm:w-[250px] md:w-[500px] h-[300px] bg-gray-700 rounded-xl mb-4 animate-pulse"></div>
            <div className="w-3/4 h-6 bg-gray-600 rounded mb-2 md:mb-4 animate-pulse"></div>
            <div className="w-5/6 h-4 bg-gray-500 rounded mb-4 animate-pulse"></div>
            <div className="w-32 h-10 bg-blue-700 rounded-full animate-pulse"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
