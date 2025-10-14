// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiUpload, FiBarChart2, FiLoader, FiActivity } from 'react-icons/fi';

// No longer needs activeTab or setActiveTab props
const Header = () => {
  // Define nav items with their corresponding paths
  const navItems = [
    { path: '/', label: 'Home', icon: <FiGrid className="mr-2" /> },
    { path: '/process', label: 'Process', icon: <FiActivity className="mr-2" /> },
    { path: '/upload', label: 'Upload', icon: <FiUpload className="mr-2" /> },
    { path: '/reports', label: 'Reports', icon: <FiBarChart2 className="mr-2" /> },
  ];

  // This function determines the styles for the link based on whether it's active
  const navLinkClasses = ({ isActive }) => 
    `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive 
        ? 'bg-slate-700 text-white' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`;

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-700">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">DisasterWatch</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                // The 'end' prop ensures the Home link is only active on the exact "/" path
                end={item.path === '/'}
                className={navLinkClasses}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
