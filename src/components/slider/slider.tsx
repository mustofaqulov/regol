import { SlideContainer } from './slideContainer.tsx';
import { Product } from '../../routes/Router.tsx'; // Use the Product type from Router

// Define props interface
interface SliderProps {
  productSlide: Product[];
}

// Export as both named and default
export const Slider: React.FC<SliderProps> = ({ productSlide }) => {
  return (
    <div className="w-full">
      <SlideContainer products={productSlide} />
    </div>
  );
};

export default Slider;
