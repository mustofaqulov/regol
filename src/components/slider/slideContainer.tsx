import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { Product } from "../productCard/productCard.tsx";

export const SlideContainer =({ products, onProductSelect,}: {products: Product[]; onProductSelect: (product: Product) => void;
}) => {
    console.log(products)
    return (
        <div className="w-full min-h-[700px] bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center py-12">
            <Swiper
                effect="coverflow"
                centeredSlides
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
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
                className="w-full max-w-[1200px]"
            >
                {products?.map((product: Product) => (
                    <SwiperSlide
                        key={product._id}
                        className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-[200px] sm:w-[250px] md:w-[300px] h-auto rounded-xl mb-4 animate-floating"
                        />
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                            {product.title}
                        </h3>
                        <p className="text-gray-300 w-full max-w-sm mx-auto text-sm sm:text-base md:text-lg mb-4">
                            {product.description}
                        </p>
                        <button
                            className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full transition-all"
                            onClick={() => onProductSelect(product)}
                        >
                            Learn more
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
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