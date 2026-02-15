import { motion } from 'framer-motion';
import MemberCard from '../components/MemberCard';

/**
 * Home Page Component
 * Displays grid of group members with their information
 */
const Home = () => {
  // Sample member data - replace with actual data
  const members = [
    {
      name: "Ada Lovelace",
      matricNumber: "MAT/2023/001",
      bio: "Frontend Developer specializing in React and UI/UX design",
      avatar: "",
      courses: [
        { code: "CSC301", title: "Software Engineering" },
        { code: "CSC302", title: "Database Systems" },
        { code: "CSC303", title: "Computer Networks" },
      ]
    },
    {
      name: "Alan Turing",
      matricNumber: "MAT/2023/002",
      bio: "Backend Developer with expertise in algorithms and data structures",
      avatar: "",
      courses: [
        { code: "CSC301", title: "Software Engineering" },
        { code: "CSC304", title: "Theory of Computation" },
        { code: "CSC305", title: "Artificial Intelligence" },
      ]
    },
    {
      name: "Grace Hopper",
      matricNumber: "MAT/2023/003",
      bio: "Full-stack Developer passionate about clean code and testing",
      avatar: "",
      courses: [
        { code: "CSC301", title: "Software Engineering" },
        { code: "CSC302", title: "Database Systems" },
        { code: "CSC306", title: "Web Development" },
      ]
    },
    {
      name: "Tim Berners-Lee",
      matricNumber: "MAT/2023/004",
      bio: "Web Technologies enthusiast and open-source contributor",
      avatar: "",
      courses: [
        { code: "CSC306", title: "Web Development" },
        { code: "CSC307", title: "Mobile App Development" },
        { code: "CSC308", title: "Cloud Computing" },
      ]
    },
    {
      name: "Margaret Hamilton",
      matricNumber: "MAT/2023/005",
      bio: "Systems programmer focused on reliability and security",
      avatar: "",
      courses: [
        { code: "CSC309", title: "Operating Systems" },
        { code: "CSC310", title: "Computer Security" },
        { code: "CSC301", title: "Software Engineering" },
      ]
    },
    {
      name: "Dennis Ritchie",
      matricNumber: "MAT/2023/006",
      bio: "Low-level programming and systems architecture specialist",
      avatar: "",
      courses: [
        { code: "CSC309", title: "Operating Systems" },
        { code: "CSC311", title: "Compiler Design" },
        { code: "CSC312", title: "Computer Architecture" },
      ]
    },
    {
      name: "Barbara Liskov",
      matricNumber: "MAT/2023/007",
      bio: "Object-oriented design and distributed systems developer",
      avatar: "",
      courses: [
        { code: "CSC301", title: "Software Engineering" },
        { code: "CSC313", title: "Distributed Systems" },
        { code: "CSC304", title: "Theory of Computation" },
      ]
    },
    {
      name: "Linus Torvalds",
      matricNumber: "MAT/2023/008",
      bio: "Open-source advocate and kernel development enthusiast",
      avatar: "",
      courses: [
        { code: "CSC309", title: "Operating Systems" },
        { code: "CSC314", title: "Systems Programming" },
        { code: "CSC315", title: "Linux Administration" },
      ]
    },
    {
      name: "Ada Yonath",
      matricNumber: "MAT/2023/009",
      bio: "Computational biology and bioinformatics researcher",
      avatar: "",
      courses: [
        { code: "CSC316", title: "Bioinformatics" },
        { code: "CSC305", title: "Artificial Intelligence" },
        { code: "CSC317", title: "Data Science" },
      ]
    },
    {
      name: "Donald Knuth",
      matricNumber: "MAT/2023/010",
      bio: "Algorithm design and analysis expert",
      avatar: "",
      courses: [
        { code: "CSC318", title: "Advanced Algorithms" },
        { code: "CSC304", title: "Theory of Computation" },
        { code: "CSC319", title: "Discrete Mathematics" },
      ]
    },
    {
      name: "Frances Allen",
      matricNumber: "MAT/2023/011",
      bio: "Compiler optimization and program analysis specialist",
      avatar: "",
      courses: [
        { code: "CSC311", title: "Compiler Design" },
        { code: "CSC318", title: "Advanced Algorithms" },
        { code: "CSC301", title: "Software Engineering" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-bold mb-4 tracking-tight">
            Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the talented members of Group 15, each bringing unique skills and
            perspectives to our collaborative projects
          </p>
        </motion.div>

        {/* Member Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {members.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              matricNumber={member.matricNumber}
              bio={member.bio}
              avatar={member.avatar}
              courses={member.courses}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
