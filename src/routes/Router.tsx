import {Routes, Route } from "react-router-dom";
import {Header} from "../components/header/header.tsx";
import {Slider} from "../components/slider/slider.tsx";
import {axiosInstance} from "../service/axios.ts";
import {ProductCardPage} from "../components/productCard/productCard.tsx";
import {useEffect, useState} from "react";
import {Product} from "../components/productCard/productCard.tsx";

export const Router = () => {
    const [products, setProducts] = useState<Product[]>([]);

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


    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Slider
                            productSlide={products}
                        />
                    }
                />
                <Route
                    path="/products"
                    element={
                        <Slider
                            productSlide={products}
                        />
                    }
                />
                <Route
                    path="/home"
                    element={
                        <Slider
                            productSlide={products}
                        />
                    }
                />
                <Route
                    path="/product/:id"
                    element={<ProductCardPage />}
                />
            </Routes>
        </>
    );
};
