import { useParams, useNavigate } from 'react-router';
import { axiosInstance } from '../../service/axios.ts';
import { useEffect, useState } from 'react';

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

export const ProductCardPage: React.FC = () => {
  const [productCard, setProductCard] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/oils/${params.id}`);
        setProductCard(response.data.oil);
        setError(null);
      } catch (err) {
        setError('Failed to load product data');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading product data...</div>
      </div>
    );
  }

  if (error || !productCard) {
    return (
      <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-white">
        <p className="text-xl text-red-400 mb-4">{error || 'Product not found'}</p>
        <button
          className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full shadow-lg transition-all"
          onClick={() => navigate('/products')}>
          Back to Products
        </button>
      </div>
    );
  }

  // Extract the product name more safely
  const productName = productCard.name.includes('0')
    ? productCard.name.slice(0, productCard.name.indexOf('0', 8) + 1)
    : productCard.name;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb navigation */}
        <div className="mb-6 flex items-center text-sm text-gray-400">
          <span className="cursor-pointer hover:text-blue-400" onClick={() => navigate('/')}>
            Home
          </span>
          <span className="mx-2">/</span>
          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate('/products')}>
            Products
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{productName}</span>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Header with back button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h1 className="text-3xl font-bold text-white">{productName}</h1>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm flex items-center transition-all"
              onClick={() => navigate('/products')}>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Products
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex flex-col">
              <div className="bg-white rounded-lg p-2 overflow-hidden">
                <img
                  src={productCard.image}
                  alt={productCard.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-200 mb-2">Description</h2>
                <p className="text-gray-300 leading-relaxed">{productCard.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-200 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Key Features
                </h2>
                <ul className="space-y-2 pl-4">
                  {productCard.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-200 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Specifications
                </h2>
                <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-600 pb-2">
                    <span className="font-medium text-gray-300">Viscosity Grade:</span>
                    <span className="text-white font-semibold">
                      {productCard.specifications.viscosityGrade}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-600 pb-2">
                    <span className="font-medium text-gray-300">Additive Source:</span>
                    <span className="text-white font-semibold">
                      {productCard.specifications.additiveSource}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-300">Industry Standards:</span>
                    <span className="text-white font-semibold">
                      {productCard.specifications.industryStandards.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-200 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                  Packaging
                </h2>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-white">{productCard.packaging}</p>
                </div>
              </div>

              {/* <div className="mt-auto pt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Contact Sales
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
