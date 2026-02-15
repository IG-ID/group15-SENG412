import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * GPA Page Component
 * Placeholder page for GPA calculation functionality
 */
const GPA = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-display font-bold mb-6 tracking-tight">
          GPA Calculator
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Grade Point Average calculator for first semester
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default GPA;
