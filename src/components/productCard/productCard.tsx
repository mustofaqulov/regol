import {useParams, useNavigate} from "react-router";
import {axiosInstance} from "../../service/axios.ts";
import {useEffect, useState} from "react";
import {ProductCardSkeleton} from "./peoductCardSkleton.tsx";

export type Product = {
    _id: string;
    name: string;
    description: string;
    image: string;
    img: string;
    title: string;
    keyFeatures: string[];
    specifications: {
        viscosityGrade: string;
        additiveSource: string;
        industryStandards: string[];
    };
    packaging: string;
};

export const ProductCardPage = () => {
    const [productCard, setProductCard] = useState<Product>()
    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        axiosInstance.get('/oils/' + params.id)
            .then((res) => {
                setProductCard(res.data.oil)
            })
    }, [])

    return (
        productCard === undefined ? <ProductCardSkeleton /> :
        <div className="min-h-screen w-full bg-gray-900 text-white p-8">
            <div className="max-w-[1110px] flex flex-col mx-auto bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex flex-col items-center md:items-start gap-6">
                    <img
                        src={productCard?.image}
                        alt={productCard?.title}
                        className="w-full  rounded-lg object-cover shadow-md"
                    />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-2">
                            {productCard?.name}
                        </h1>
                        <p className="text-gray-400 mb-6 leading-relaxed">{productCard?.description}</p>

                        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {productCard?.keyFeatures.map((feature, index) => (
                                <li key={index} className="text-gray-300">
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-3">Specifications</h2>
                        <div className="space-y-2 text-gray-300">
                            <p>
                                <strong className="font-medium text-white">Viscosity Grade:</strong> {productCard?.specifications.viscosityGrade}
                            </p>
                            <p>
                                <strong className="font-medium text-white">Additive Source:</strong> {productCard?.specifications.additiveSource}
                            </p>
                            <p>
                                <strong className="font-medium text-white">Industry Standards:</strong> {productCard?.specifications.industryStandards.join(", ")}
                            </p>
                        </div>

                        <h2 className="text-2xl font-semibold mt-8 mb-3">Packaging</h2>
                        <h3 className="text-gray-300">
                            {productCard?.packaging}
                        </h3>

                        <div className="mt-10">
                            <button
                                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg transition-all"
                                onClick={() => navigate('/products')}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
