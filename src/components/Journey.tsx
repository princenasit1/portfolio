import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import {  RevealOnScroll } from "./Animations/ScrollAnimations";
import { HoverGlow, TiltCard } from "./Animations/InteractiveElements";
import { ModernCard } from "./ModernCard";
import { BlurText, FadeInText } from "./Animations/TextReveal";
import profileImage from "../../public/my-photo.jpg";
import { SiAwsorganizations, SiUdemy } from "react-icons/si";
import {
  FaBookOpen,
  FaBullseye,
  FaCalendarAlt,
  FaCamera,
  FaChartBar,
  FaCheckCircle,
  FaCoffee,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaMoon,
  FaMusic,
  FaPhone,
  FaPlane,
  FaRocket,
  FaSchool,
  FaSeedling,
  FaTrophy,
  FaUniversity,
} from "react-icons/fa";
import { IconType } from "react-icons";

// Education data
const educationData = [
  {
    degree: "Bachelor of Technology",
    institution: "Institute of Technology, Nirma University",
    period: "Oct 2021 - May 2025",
    grade: "CGPA: 8.69/10.0",
    description: "Specialized in Software Engineering and Data Structures",
    icon: FaUniversity,
    color: "from-blue-600 to-purple-600",
    achievements: [
      "Student Placement Coordinator",
      "Programming Contest Winner",
      "Hackathon Organizer",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "S. K. P. School",
    period: "Jun 2019 - May 2021",
    grade: "96.8%",
    description: "Mathematics, Physics, Chemistry focus",
    icon: FaSchool,
    color: "from-green-500 to-emerald-600",
    achievements: [
      "School Topper",
      "Science Olympiad Gold",
      "Mathematics Excellence Award",
    ],
  },
];

// Certifications data
const certificationsData = [
  {
    name: "MINeD Hackathon 2024 1st Runners-up",
    issuer: "Institute of Technology, Nirma University",
    date: "2024",
    icon: FaTrophy,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    icon: SiUdemy,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AWS Academy Graduate",
    issuer: "AWS Academy Cloud Foundations",
    date: "2024",
    icon: SiAwsorganizations,
    color: "from-cyan-400 to-blue-500",
  },
  //   {
  //     name: "MongoDB Developer",
  //     issuer: "MongoDB University",
  //     date: "2023",
  //     icon: "🍃",
  //     color: "from-green-600 to-green-800"
  //   }
];

// Languages data
const languagesData = [
  {
    name: "English",
    level: "Fluent",
    percentage: 95,
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "Hindi",
    level: "Native",
    percentage: 100,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Gujarati",
    level: "Native",
    percentage: 100,
    color: "from-green-500 to-emerald-600",
  },
];

// Personal interests and hobbies
const interestsData = [
  { name: "Traveling", icon: FaPlane, color: "from-blue-500 to-cyan-500" },
  { name: "Reading", icon: FaBookOpen, color: "from-green-500 to-emerald-600" },
  { name: "Photography", icon: FaCamera, color: "from-purple-500 to-pink-500" },
  { name: "Music", icon: FaMusic, color: "from-indigo-500 to-purple-500" },
  // { name: "Chess", icon: FaChess, color: "from-gray-700 to-black" },
  // { name: "Gaming", icon: FaGamepad, color: "from-red-500 to-pink-500" },
];

// Fun facts
const funFacts = [
  {
    icon: FaCoffee,
    color: "text-amber-600",
    text: "Coffee enthusiast - 5 cups a day keeps bugs away",
  },
  {
    icon: FaMoon,
    color: "text-indigo-500",
    text: "Night owl - Best code written after midnight",
  },
  {
    icon: FaRocket,
    color: "text-blue-500",
    text: "Space lover - Dream to code for NASA someday",
  },
  {
    icon: FaBullseye,
    color: "text-red-500",
    text: "Problem solver - Love debugging complex issues",
  },
  {
    icon: FaSeedling,
    color: "text-green-600",
    text: "Open source contributor - Believe in sharing knowledge",
  },
];

// Personal info
const personalInfo = {
  name: "Prince Nasit",
  title: "Full Stack Developer & Tech Enthusiast",
  location: "Rajkot, India",
  email: "princenasit371@gmail.com",
  phone: "+91 99048 19036",
  website: "www.princenasit.com",
  bio: "I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful solutions. With a strong foundation in modern web technologies, I enjoy creating user-centric applications that make a difference. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or capturing moments through my camera lens.",
  profileImage: profileImage,
  availability: "Available for freelance & full-time opportunities",
};

interface EducationCardProps {
  education: {
    degree: string;
    institution: string;
    period: string;
    grade: string;
    description: string;
    icon: IconType;
    color: string;
    achievements: string[];
  };
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <RevealOnScroll delay={index * 0.2} direction="up">
      <TiltCard maxTilt={5}>
        <HoverGlow>
          <ModernCard
            variant="glass"
            className="p-6 h-full group cursor-pointer overflow-hidden relative"
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${education.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              initial={false}
            />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${education.color} flex items-center justify-center text-white text-xl flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* {education.icon} */}
                  <education.icon />
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="text-lg font-bold mb-1 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {education.degree}
                  </motion.h3>

                  <p className="text-sm font-medium text-blue-600 dark:text-cyan-400 mb-1">
                    {education.institution}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-500" />
                      {education.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaChartBar className="text-green-500" />
                      {education.grade}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {education.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Achievements:
                </h4>
                <div className="space-y-1">
                  {education.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${education.color} mr-2 flex-shrink-0`}
                      />
                      {achievement}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ModernCard>
        </HoverGlow>
      </TiltCard>
    </RevealOnScroll>
  );
};

const About = () => {
  const [selectedSection, setSelectedSection] = React.useState("about");

  return (
    <section
      id="about"
      className="relative p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                ABOUT ME
              </BlurText>
            </motion.h1>
          </FadeInText>

          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Get to know me better - my story, education, and what drives me
            </p>
          </FadeInText>

          {/* Section Toggle */}
          <motion.div
            className="flex justify-center gap-2 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {["about", "education", "details"].map((section) => (
              <motion.button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  selectedSection === section
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white/10 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Content Sections */}
        <motion.div
          key={selectedSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {selectedSection === "about" && (
            <div className="max-w-6xl mx-auto">
              {/* Main About Card */}
              <RevealOnScroll direction="up" className="mb-12">
                <TiltCard maxTilt={3}>
                  <HoverGlow>
                    <ModernCard
                      variant="glass"
                      className="p-8 group overflow-hidden relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />

                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
                          {/* Profile Section */}
                          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                            {/* Centered Profile Image */}
                            <motion.div
                              className="w-40 h-40 relative mb-6"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image
                                src={personalInfo.profileImage}
                                alt="Profile Image"
                                className="w-full h-full rounded-full object-cover"
                              />
                            </motion.div>

                            {/* Contact Info */}
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              <p className="flex items-center gap-2 justify-center lg:justify-start">
                                <FaEnvelope className="text-blue-500" />
                                {personalInfo.email}
                              </p>
                              <p className="flex items-center gap-2 justify-center lg:justify-start">
                                <FaPhone className="text-green-500" />
                                {personalInfo.phone}
                              </p>
                              <p className="flex items-center gap-2 justify-center lg:justify-start">
                                <FaGlobe className="text-cyan-500" />
                                {personalInfo.website}
                              </p>
                              <p className="flex items-center gap-2 justify-center lg:justify-start">
                                <FaMapMarkerAlt className="text-red-500" />
                                {personalInfo.location}
                              </p>
                              <motion.p
                                className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2 justify-center lg:justify-start"
                                whileHover={{ scale: 1.05 }}
                              >
                                <FaCheckCircle className="text-green-500" />
                                {personalInfo.availability}
                              </motion.p>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="flex-1">
                            <motion.h2
                              className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                              whileHover={{ scale: 1.02 }}
                            >
                              {personalInfo.name}
                            </motion.h2>

                            <motion.p
                              className="text-xl font-medium text-blue-600 dark:text-cyan-400 mb-6"
                              whileHover={{ scale: 1.02 }}
                            >
                              {personalInfo.title}
                            </motion.p>

                            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                              {personalInfo.bio}
                            </p>

                            {/* Fun Facts */}
                            <div>
                              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                Fun Facts About Me
                              </h3>
                              <div className="space-y-3">
                                {funFacts.map((fact, index) => (
                                  <motion.div
                                    key={index}
                                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                  >
                                    <fact.icon
                                      className={`text-lg ${fact.color} flex-shrink-0`}
                                    />
                                    {fact.text}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ModernCard>
                  </HoverGlow>
                </TiltCard>
              </RevealOnScroll>
            </div>
          )}

          {selectedSection === "education" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {educationData.map((education, index) => (
                  <EducationCard
                    key={education.degree}
                    education={education}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedSection === "details" && (
            <div className="mx-auto mb-12">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                {/* Certifications */}
                <RevealOnScroll direction="up">
                  <TiltCard maxTilt={3}>
                    <HoverGlow>
                      <ModernCard variant="glass" className="p-6 h-full">
                        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          Certifications
                        </h3>
                        <div className="space-y-4">
                          {certificationsData.map((cert, index) => (
                            <motion.div
                              key={cert.name}
                              className="flex items-center gap-4 p-3 rounded-lg bg-white/5 dark:bg-gray-800/20 border border-white/10"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-white`}
                              >
                                <cert.icon />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 dark:text-white">
                                  {cert.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {cert.issuer} • {cert.date}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ModernCard>
                    </HoverGlow>
                  </TiltCard>
                </RevealOnScroll>

                {/* Languages */}
                <RevealOnScroll direction="up" delay={0.2}>
                  <TiltCard maxTilt={3}>
                    <HoverGlow>
                      <ModernCard variant="glass" className="p-6 h-full">
                        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          Languages
                        </h3>
                        <div className="space-y-6">
                          {languagesData.map((language, index) => (
                            <motion.div
                              key={language.name}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold text-gray-800 dark:text-white">
                                  {language.name}
                                </h4>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {language.level}
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <motion.div
                                  className={`h-2 rounded-full bg-gradient-to-r ${language.color}`}
                                  initial={{ width: 0 }}
                                  whileInView={{
                                    width: `${language.percentage}%`,
                                  }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.2,
                                  }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ModernCard>
                    </HoverGlow>
                  </TiltCard>
                </RevealOnScroll>
              </div>
              <RevealOnScroll direction="up" delay={0.3} className="mt-10">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {interestsData.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TiltCard maxTilt={10}>
                        <HoverGlow>
                          <ModernCard
                            variant="glass"
                            className="p-4 text-center group cursor-pointer overflow-hidden relative"
                          >
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                              initial={false}
                            />
                            <div className="relative z-10 flex flex-col items-center">
                              <motion.div
                                className={`text-2xl content-center flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br  mb-2 ${interest.color}`}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                              >
                                <interest.icon className="text-white" />
                              </motion.div>
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {interest.name}
                              </p>
                            </div>
                          </ModernCard>
                        </HoverGlow>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
