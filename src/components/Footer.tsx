
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2025 SY_ALL Case Portal. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/emergency" className="text-gray-600 hover:text-gray-900">
              Emergency
            </Link>
            <Link to="/police" className="text-gray-600 hover:text-gray-900">
              Police
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
