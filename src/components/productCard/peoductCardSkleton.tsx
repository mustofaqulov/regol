export const ProductCardSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-8">
      <div className="max-w-[1110px] flex flex-col mx-auto bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="w-full h-[300px] bg-gray-700 rounded-lg shadow-md animate-pulse"></div>
          <div className="flex-1">
            <div className="h-8 w-3/4 bg-gray-600 rounded mb-4 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-500 rounded mb-6 animate-pulse"></div>

            <div className="h-6 w-1/2 bg-gray-600 rounded mb-3 animate-pulse"></div>
            <ul className="space-y-2">
              {[...Array(3)].map((_, index) => (
                <li key={index} className="h-4 w-5/6 bg-gray-500 rounded animate-pulse"></li>
              ))}
            </ul>

            <div className="h-6 w-1/2 bg-gray-600 rounded mt-8 mb-3 animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-4 w-5/6 bg-gray-500 rounded animate-pulse"></div>
              ))}
            </div>

            <div className="h-6 w-1/2 bg-gray-600 rounded mt-8 mb-3 animate-pulse"></div>
            <div className="h-4 w-1/3 bg-gray-500 rounded animate-pulse"></div>

            <div className="mt-10">
              <div className="h-10 w-32 bg-blue-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
