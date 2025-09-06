// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          AI-Powered Disaster Response
        </h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-#1e1ec5-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Upload
          </Link>
          <Link
            to="/reports"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Reports
          </Link>
        </div>
      </div>
    </nav>
  );
}
