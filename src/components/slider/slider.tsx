import { SlideContainer } from "./slideContainer.tsx";
import {Product} from "../productCard/productCard.tsx";

export const Slider = ({ productSlide }: { productSlide: Product[]}) => {

    return (
        <>
            <SlideContainer
                products={productSlide}
            />
        </>
    );
};
