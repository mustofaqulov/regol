import { SlideContainer } from "./slideContainer.tsx";
import { axiosInstance } from "../../service/axios.ts";
import { useEffect, useState } from "react";
import {Product} from "../productCard/productCard.tsx";

export const Slider = ({ productSlide, onProductSelect }: { productSlide: Product[], onProductSelect: (product: Product) => void }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axiosInstance.get("/oils").then((response) => {
            setProducts(response.data.oils);
        }).catch((error) => {
            console.error("Error fetching products:", error);
        });
    }, []);

    return (
        <>
            {products?.map((product: Product) => (
                <SlideContainer
                    onProductSelect={onProductSelect}
                    products={productSlide}
                    key={product._id}
                />
            ))}
        </>
    );
};
