import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState, ReactNode } from 'react';
import { axiosInstance } from '../service/axios.ts';

export interface Product {
  id: string | number;
  name: string;
  price?: number;
  description?: string;
  image?: string;
}

interface ApiResponse {
  oils: Product[];
}

// Fix lazy loading - match the export structure
const Header = lazy(() =>
  import('../components/header/header.tsx').then((module) => ({ default: module.Header })),
);
const Footer = lazy(() =>
  import('../components/footer/footer.tsx').then((module) => ({ default: module.Footer })),
);
const Slider = lazy(() => import('../components/slider/slider.tsx')); // Use default export directly
const ProductCardPage = lazy(() =>
  import('../components/productCard/productCard.tsx').then((module) => ({
    default: module.ProductCardPage,
  })),
);
const ProductBanners = lazy(() =>
  import('../components/productBanners/productBanners.tsx').then((module: any) => ({
    default: module.ProductBanners,
  })),
);
const AboutUs = lazy(() => import('../pages/about-us.tsx')); // Assuming default export

// Loading fallback
const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export const Router: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axiosInstance.get<ApiResponse>('/oils', {
          signal: controller.signal,
        });
        setProducts(response.data.oils || []);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError('Failed to load products. Please try again later.');
          console.error('Error fetching products:', err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, []);

  const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <>
      <Header />
      <main className="min-h-screen">
        {error ? <div className="text-center py-10 text-red-500">{error}</div> : children}
      </main>
      <Footer />
    </>
  );

  return (
    <Suspense fallback={<LoadingFallback />}>
      {isLoading ? (
        <LoadingFallback />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <>
                  <ProductBanners />
                  <Slider productSlide={products} />
                  <AboutUs />
                </>
              </MainLayout>
            }
          />
          <Route
            path="/home"
            element={
              <MainLayout>
                <>
                  <ProductBanners />
                  <Slider productSlide={products} />
                  <AboutUs />
                </>
              </MainLayout>
            }
          />
          <Route
            path="/products"
            element={
              <MainLayout>
                <Slider productSlide={products} />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutUs />
              </MainLayout>
            }
          />
          <Route
            path="/company"
            element={
              <MainLayout>
                <AboutUs />
              </MainLayout>
            }
          />
          <Route
            path="/banners"
            element={
              <MainLayout>
                <ProductBanners />
              </MainLayout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <MainLayout>
                <ProductCardPage />
              </MainLayout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default Router;
