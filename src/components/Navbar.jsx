import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Navigation Bar Component
 * Displays logo and navigation links with active state styling
 */
const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/payroll', label: 'Payroll' },
    { path: '/gpa', label: 'GPA' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold tracking-tight"
            >
              Group <span className="text-gray-400">15</span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-500 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
