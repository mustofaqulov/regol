import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../routes/Router.tsx'; // Use consistent Product type

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { SlideSkeleton } from './slideSkleton.tsx';
import { useNavigate } from 'react-router-dom';

// Define props interface correctly
interface SlideContainerProps {
  products: Product[];
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ products }) => {
  const navigate = useNavigate();
  return products?.length === 0 ? (
    <SlideSkeleton />
  ) : (
    <div className="w-full text-white px-4 md:px-8 lg:px-12 xl:px-28 flex flex-col p-4 min-h-[700px] bg-gradient-to-b from-gray-900 via-black to-gray-900 justify-center py-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Title with glowing effect */}
        <div className="relative mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 border-b border-gray-600 pb-2 inline-block">
            Our Premium Products
          </h1>
          <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-blue-500 animate-pulse"></div>
        </div>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mb-8">
          Discover our range of premium German-engineered lubricants designed for maximum engine
          protection and performance.
        </p>

        {/* Swiper with enhanced styling */}
        <Swiper
          effect="coverflow"
          centeredSlides
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full rounded-lg pb-12">
          {products?.map((product) => (
            <SwiperSlide
              key={product.id} // Changed from _id to id to match Product interface
              className="flex w-full max-w-[500px] flex-col items-center justify-center cursor-pointer bg-gray-900 transition-[0.5s] hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 rounded-2xl shadow-lg p-4 md:p-6 lg:p-6">
              <div className="relative w-full overflow-hidden rounded-xl mb-4">
                <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-xl"></div>
                <img
                  src={product.image}
                  alt={product.name} // Changed from title to name
                  className="mx-auto w-full max-w-[200px] md:max-w-[300px] h-auto rounded-xl mb-4 animate-floating object-contain"
                />
              </div>
              <div className="text-center px-2">
                <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 truncate">
                  {product.name}
                </h4>
                <p className="text-gray-300 w-full max-w-sm mx-auto text-[14px] sm:text-base md:text-[14px] mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button
                  className="mt-4 text-[12px] md:text-sm cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-[6px] transition-all shadow-lg hover:shadow-blue-600/20"
                  onClick={() => navigate(`/product/${product.id}`)} // Changed from _id to id
                >
                  Learn more
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Add subtle background pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>

      {/* Animation styles */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SlideContainer;
