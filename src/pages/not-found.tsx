import { useNavigate } from 'react-router-dom';
import Logo from '../assets/regol_logo.png'; // Updated logo filename assumption

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <img
          src={Logo}
          alt="Regol Oil Logo"
          className="mx-auto h-20 md:h-24 mb-8 animate-bounce-slow"
          loading="lazy"
        />

        <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 tracking-tight">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          It seems you've ventured into uncharted territory. The page you're looking for doesn't
          exist or has been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
          aria-label="Return to Home">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Back to Home
        </button>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse-slow delay-200"></div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
