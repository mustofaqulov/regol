import Logo from '../../assets/regal_logo.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-2">
          <NavLink to="/home" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 sm:h-12 md:h-14" />
          </NavLink>
        </div>

        <div className="relative hidden lg:block w-1/3">
          <input
            type="text"
            placeholder="Search products, services..."
            className="w-full px-4 py-3 rounded-full bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 text-gray-200 w-full">
          <ul className="flex flex-col gap-4 py-4 px-6">
            <li>
              <NavLink
                to="/company"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 text-base font-medium'
                    : 'text-gray-200 text-base font-medium hover:text-blue-400'
                }
                onClick={() => setIsMenuOpen(false)}>
                Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 text-base font-medium'
                    : 'text-gray-200 text-base font-medium hover:text-blue-400'
                }
                onClick={() => setIsMenuOpen(false)}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 text-base font-medium'
                    : 'text-gray-200 text-base font-medium hover:text-blue-400'
                }
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
