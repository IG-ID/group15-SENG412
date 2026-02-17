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
      name: "Silvanus charles chimamkpam",
      matricNumber: "22/0027",
      bio: "Design o",
      avatar: "",
      courses: [
        { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "SOARES  STEPHANIA OLUWAJENROLA",
      matricNumber: "22/0081",
      bio: "Backend Developer with expertise in algorithms and data structures",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "SODUNKE OLUWATUNMISE",
      matricNumber: "22/0109",
      bio: "Full-stack Developer passionate about clean code and testing",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "SOGBESAN ITUNUOLUWA AYOMI",
      matricNumber: "22/0193",
      bio: "Web Technologies enthusiast and open-source contributor",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "SOJI-ODERINDE OLUWADAMILOLA ERNEST",
      matricNumber: "22/0092",
      bio: "Systems programmer focused on reliability and security",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "Dennis RitchieTAIWO ISAAC AYOOLA",
      matricNumber: "22/0146",
      bio: "Low-level programming and systems architecture specialist",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "TAIWO ISRAEL IDOWU",
      matricNumber: "22/0076",
      bio: "Object-oriented design and distributed systems developer",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "TAIWO KEHINDE HIKMAT",
      matricNumber: "22/0172",
      bio: "Open-source advocate and kernel development enthusiast",
      avatar: "",
      courses: [
        { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "TEMPLE AJIMBA",
      matricNumber: "22/0296",
      bio: "Computational biology and bioinformatics researcher",
      avatar: "",
      courses: [
        { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "THOMAS-OROGAN TIMILEHIN AKINOLA",
      matricNumber: "22/0066",
      bio: "Algorithm design and analysis expert",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
      ]
    },
    {
      name: "TOBIN-WEST TAMUNOSAKI",
      matricNumber: "22/0184",
      bio: "Compiler optimization and program analysis specialist",
      avatar: "",
      courses: [
         { code: "COSC430", title: " Hands-on JAVA training" },
        { code: "SENG412", title: "Database Systems" },
        { code: "SENG490", title: "Research Project" },
        { code: "SENG414", title: "Cloud Computing Technologies" },
        { code: "SENG402", title: " Software Quality Engineering and Testing" },
        { code: "SENG404", title: " Human Computer Interaction and Emerging Technologies" },
        { code: "SENG406", title: "Formal Methods Specification in Software Engineering" },
        { code: "GEDS420", title: "Biblical Principles and Professional Life" },
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
