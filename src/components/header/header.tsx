import Logo from "../../assets/regal_logo.png";

import { NavLink } from "react-router";

export const Header = () => {
    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg py-4 sticky top-0 z-50">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4">
                <div className="flex items-center gap-2">
                    <NavLink to="/home" className="flex items-center">
                        <img src={Logo} alt="Logo" className=" h-16" />
                    </NavLink>
                </div>

                {/* Search Bar */}
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Search products, services..."
                        className="w-full px-4 py-3 rounded-full bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-full transition-all">
                        Search
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-6 items-center">
                    <NavLink
                        to="/company"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 text-lg font-medium"
                                : "text-gray-200 text-lg font-medium hover:text-blue-400"
                        }
                    >
                        Company
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 text-lg font-medium"
                                : "text-gray-200 text-lg font-medium hover:text-blue-400"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 text-lg font-medium"
                                : "text-gray-200 text-lg font-medium hover:text-blue-400"
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};
