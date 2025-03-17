import { SlideContainer } from './slideContainer.tsx';
import { Product } from '../../routes/Router.tsx';

interface SliderProps {
  productSlide: Product[];
}

export const Slider: React.FC<SliderProps> = ({ productSlide }) => {
  return (
    <div className="w-full">
      <SlideContainer products={productSlide} />
    </div>
  );
};

export default Slider;
