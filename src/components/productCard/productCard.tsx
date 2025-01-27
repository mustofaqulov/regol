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

export const ProductCard = ({
                                productCard,
                                onBack,
                            }: {
    productCard: Product;
    onBack: (product: Product) => void;
}) => {
    console.log(productCard)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            <div
                key={productCard?._id}
                className="bg-gray-800 text-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
                onClick={() => onBack(productCard)}
            >
                <img
                    src={productCard?.img}
                    alt={productCard?.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{productCard?.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                    {productCard?.description}
                </p>
                <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside mb-4">
                    {productCard?.keyFeatures?.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300">
                            {feature}
                        </li>
                    ))}
                </ul>
                <h4 className="text-lg font-semibold mb-2">Specifications:</h4>
                <ul className="list-none text-sm text-gray-300 mb-4">
                    <li><strong>Viscosity Grade:</strong> {productCard?.specifications.viscosityGrade}</li>
                    <li><strong>Additive Source:</strong> {productCard?.specifications.additiveSource}</li>
                    <li><strong>Industry Standards:</strong> {productCard?.specifications.industryStandards.join(", ")}
                    </li>
                </ul>
                <h4 className="text-lg font-semibold mb-2">Packaging:</h4>
                <p className="text-sm text-gray-300">{productCard?.packaging}</p>
                <button
                    className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full transition-all"
                    onClick={() => onBack(productCard)}
                >
                    Back
                </button>
            </div>
        </div>
    );
};
