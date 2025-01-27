import {Routes, Route} from "react-router-dom";
import {Header} from "../components/header/header.tsx";
import {Slider} from "../components/slider/slider.tsx";
import {axiosInstance} from "../service/axios.ts";
import {ProductCard} from "../components/productCard/productCard.tsx";
import {useEffect, useState} from "react";
import {Product} from "../components/productCard/productCard.tsx";

export const Router = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get("/oils");
                setProducts(response.data.oils);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleBack = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        selectedProduct ? (
                            <ProductCard productCard={selectedProduct} onBack={handleBack} />
                        ) : (
                            <Slider
                                productSlide={products}
                                onProductSelect={handleProductSelect}
                            />
                        )
                    }
                />
                <Route path="/home" element={<Slider productSlide={products} onProductSelect={handleProductSelect} />} />
            </Routes>
        </>
    );
};