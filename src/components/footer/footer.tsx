export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">About REGÖL</h4>
              <p className="text-gray-400">
                REGÖL provides premium motor engine oils with German additives technology for
                superior engine protection and performance.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Products</h4>
              <ul className="text-gray-400">
                <li className="mb-2">Fully Synthetic Oils</li>
                <li className="mb-2">Semi-Synthetic Oils</li>
                <li className="mb-2">Mineral Oils</li>
                <li className="mb-2">Specialty Lubricants</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="text-gray-400">
                <li className="mb-2">+998987760001</li>
                <li className="mb-2">+998972941666</li>
                <li className="mb-2">info@regol.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  FB
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  IG
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  TW
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  YT
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 REGÖL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
