import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/siren_emergency.svg"
            alt="Emergency Siren"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">SY_ALL Case Portal</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/emergency"
                className="text-emergency-DEFAULT hover:text-emergency-hover"
              >
                Emergency
              </Link>
            </li>
            <li>
              <Link
                to="/police"
                className="text-police-DEFAULT hover:text-police-hover"
              >
                Police
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
