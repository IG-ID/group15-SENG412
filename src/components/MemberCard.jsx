import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Member Card Component
 * Displays member information with animated hover overlay for course details
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - Member's full name
 * @param {string} props.matricNumber - Member's matriculation number
 * @param {string} props.bio - Short biography
 * @param {string} props.avatar - Avatar/profile image URL or initials
 * @param {Array<Object>} props.courses - Array of course objects {code, title}
 */
const MemberCard = ({ name, matricNumber, bio, avatar, courses = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate initials from name if no avatar provided
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-100">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-display font-semibold text-gray-600">
              {getInitials(name)}
            </span>
          )}
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center space-y-2">
        <h3 className="font-display font-semibold text-lg text-primary">
          {name}
        </h3>
        <p className="text-sm text-gray-500 font-medium">{matricNumber}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
      </div>

      {/* Hover Overlay - Course Details */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-primary/95 backdrop-blur-sm p-6 flex flex-col justify-center"
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <h4 className="font-display font-semibold text-white text-center mb-4">
                Course Details
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-thin">
                {courses.length > 0 ? (
                  courses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="bg-white/10 rounded-lg p-2 backdrop-blur-sm"
                    >
                      <p className="text-white font-medium text-sm">
                        {course.code}
                      </p>
                      <p className="text-white/80 text-xs">{course.title}</p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-white/70 text-sm text-center">
                    No courses registered
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MemberCard;
