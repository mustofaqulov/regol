import { SlideContainer } from './slideContainer.tsx';
import { Product } from '../productCard/productCard.tsx';

export const Slider = ({ productSlide }: { productSlide: Product[] }) => {
  return (
    <>
      <div className="w-full">
        <SlideContainer products={productSlide} />
      </div>
    </>
  );
};
