import Logo from '../assets/regal_logo.png';

const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200">
      {/* Hero Section with Blur Effect */}
      <div className="relative w-full py-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            About Us – REGOL Lubricants
          </h1>
          <p className="text-xl text-blue-400 font-medium max-w-3xl">
            Innovation, Performance, and Reliability in Every Drop
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-6">
              At REGOL Lubricants, we are committed to revolutionizing the automotive industry with
              premium-quality motor oils and lubricants designed for maximum engine protection,
              efficiency, and performance. With cutting-edge German additive technology, our
              products meet and exceed the highest international standards, ensuring that every
              vehicle runs smoothly and efficiently under any conditions.
            </p>
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h2>
              <p>
                Our goal is simple – to provide the best lubrication solutions for modern engines,
                enhancing their longevity, reducing wear, and optimizing fuel efficiency. Whether
                it's a high-performance sports car, a daily commuter, or a heavy-duty truck, REGOL
                Lubricants is the trusted choice for drivers who demand excellence.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg p-1">
              <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl flex items-center justify-center">
                <div className="p-8 animate-floating">
                  {/* Placeholder for image - replace with actual product image */}
                  <div className="w-64 h-64 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full flex items-center justify-center">
                    <img className="w-32" src={Logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose REGOL */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Choose REGOL?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Advanced Formulations',
                description: 'Engineered with state-of-the-art additives for superior protection.',
              },
              {
                title: 'German Technology',
                description:
                  'Precision-crafted lubricants designed to perform in extreme conditions.',
              },
              {
                title: 'Universal Compatibility',
                description: 'Suitable for gasoline, diesel, and hybrid engines.',
              },
              {
                title: 'Certified Quality',
                description:
                  'Our oils meet the highest industry standards, including API, ACEA, Dexos2, and major OEM approvals.',
              },
              {
                title: 'Commitment to Excellence',
                description:
                  'We continuously innovate to deliver cutting-edge lubrication solutions that keep engines running at their best.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Made for the Future */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Made for the Future</h2>
          <p className="text-gray-300 mb-6">
            As the automotive industry evolves, so do we. REGOL Lubricants is committed to
            sustainability, efficiency, and technological advancements that ensure our oils provide
            optimal performance while reducing environmental impact.
          </p>
          <div className="text-center">
            <p className="text-xl font-bold text-blue-400">
              REGOL – Because the heart of your engine is our concern!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
