import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import the images (replace these with the actual paths to your images)
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';
import banner5 from '../../assets/banner5.png';
import banner6 from '../../assets/banner6.png';

const ProductBanners = () => {
  // Array of slide images
  const slides = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="w-full mx-auto px-4 py-24 bg-gradient-to-b from-gray-900 to-gray-900 ">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        centeredSlides
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3500, // Increased to 3.5 seconds for a smoother feel
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            'swiper-pagination-bullet bg-white opacity-50 w-3 h-3 rounded-full mx-1 transition-opacity duration-300 hover:opacity-75',
          bulletActiveClass: 'swiper-pagination-bullet-active opacity-100 bg-red-600',
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="relative"
        breakpoints={{
          640: { slidesPerView: 1 }, // Small screens
          1024: { slidesPerView: 2.3 }, // Larger screens (optional multi-slide if needed later)
        }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={slide}
                alt={`Regol Product Banner ${index + 1}`}
                className="w-full max-w-[1200px] h-auto max-h-[500px] object-cover rounded-xl shadow-xl transition-transform duration-300 cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductBanners;
