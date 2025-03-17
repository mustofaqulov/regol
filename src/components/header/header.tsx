import Logo from '../../assets/regal_logo.png';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Define types
interface NavItem {
  path: string;
  label: string;
  icon?: string; // Optional icon for nav items
}

// Sample user type (expand as needed)
interface User {
  name: string;
  avatar?: string;
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Sample user (replace with actual auth logic)
  const user: User | null = { name: 'John Doe', avatar: 'https://via.placeholder.com/40' };

  // Close mobile menu on route change and sync theme
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [location, isDarkMode]);

  const navItems: NavItem[] = [
    { path: '/about', label: 'About', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    {
      path: '/products',
      label: 'Products',
      icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    },
    {
      path: '/company',
      label: 'Company',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search navigation or API call
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-300 dark:bg-gray-800/95">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-95 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <NavLink to="/home" className="flex items-center group" aria-label="Home">
            <img
              src={Logo}
              alt="Regal Logo"
              className="h-10 sm:h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-xs w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 dark:bg-gray-700/50 dark:border-gray-600 dark:text-gray-100"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
                aria-label="Submit search">
                <svg
                  className="h-5 w-5 text-gray-400 hover:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            {/* Nav Items */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400'
                        : 'text-gray-200 hover:text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full dark:text-gray-100'
                    }`
                  }
                  aria-label={item.label}>
                  {item.icon && (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  )}
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            <svg
              className="h-6 w-6 text-white transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden animate-slide-down bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 dark:bg-gray-800/95">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 dark:bg-gray-700/50 dark:border-gray-600 dark:text-gray-100"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
                  aria-label="Submit search">
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>

              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-2.5 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-400 bg-gray-800/50'
                        : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/50 dark:text-gray-100 dark:hover:bg-gray-700/50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={item.label}>
                  {item.icon && (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  )}
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
