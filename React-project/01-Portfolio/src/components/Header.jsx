import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-blue-300 hover:text-blue-400 transition-colors duration-300 capitalize"
          >
            Pratham gehlot
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-lg font-medium">
            {[
              { label: "Home", path: "/" },
              { label: "Education", path: "/education" },
              { label: "Experience", path: "/experience" },
              { label: "Skills", path: "/skills" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="hover:text-blue-400 transition duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Toggle in top-right corner (absolute) */}
        <button
          className="absolute top-4 right-4 md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 pt-4 pb-2 text-base font-medium">
            {[
              { label: "Home", path: "/" },
              { label: "Education", path: "/education" },
              { label: "Experience", path: "/experience" },
              { label: "Skills", path: "/skills" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded hover:bg-blue-700 hover:text-white transition duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
