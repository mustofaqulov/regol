import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';
import banner5 from '../../assets/banner5.png';
import banner6 from '../../assets/banner6.png';

export const ProductBanners: React.FC = () => {
  const slides = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12 md:py-16 lg:py-24 relative">
      {/* Section title */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
            Featured Products
          </h2>
          <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-blue-500 animate-pulse"></div>
        </div>
        <p className="text-gray-300 max-w-2xl mt-4">
          Explore our premium range of German-engineered lubricants designed for superior
          performance.
        </p>
      </div>

      {/* Swiper container with enhanced styling */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50 z-10 pointer-events-none"></div>

          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            // effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: {
                slidesPerView: 2,
                effect: 'slide',
                centeredSlides: true,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2.5,
                effect: 'slide',
                centeredSlides: true,
                spaceBetween: 40,
              },
            }}
            className="w-full">
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>

                  <div className="flex justify-center items-center p-2 md:p-4">
                    <img
                      src={slide}
                      alt={`REGOL Product Banner ${index + 1}`}
                      className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                    />
                  </div>

                  {/* Optional caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4 md:p-6 rounded-b-xl">
                    <h3 className="text-lg md:text-xl text-white font-bold">
                      Premium Series {index + 1}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 hidden md:block">
                      German-engineered for maximum performance
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductBanners;
