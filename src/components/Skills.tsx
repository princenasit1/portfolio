import { motion } from "framer-motion";
import React from "react";

import cppIcon from "../../public/assets/skills/cpp.png";
import javaIcon from "../../public/assets/skills/java.png";
import sqlIcon from "../../public/assets/skills/sql.png";
import pythonIcon from "../../public/assets/skills/python.png";
import javascriptIcon from "../../public/assets/skills/javascript.png";
import typescriptIcon from "../../public/assets/skills/typescript.png";
import htmlIcon from "../../public/assets/skills/html.png";
import cssIcon from "../../public/assets/skills/css.png";
import reactIcon from "../../public/assets/skills/react.png";
import tailwindIcon from "../../public/assets/skills/tailwindcss.png";
import nodejsIcon from "../../public/assets/skills/nodejs.png";
import apiIcon from "../../public/assets/skills/rest_api.png";
import nextIcon from "../../public/assets/skills/next.png";
import nestIcon from "../../public/assets/skills/nest.png";
import mongodbIcon from "../../public/assets/skills/mongodb.png";
import mysqlIcon from "../../public/assets/skills/mysql.png";
import firebaseIcon from "../../public/assets/skills/firebase.png";
import postgreSQLIcon from "../../public/assets/skills/postgres.png";
import gitIcon from "../../public/assets/skills/git.png";
import githubIcon from "../../public/assets/skills/github.png";
import postmanIcon from "../../public/assets/skills/postman.png";
import dockerIcon from "../../public/assets/skills/docker.png";
import githubActionsIcon from "../../public/assets/skills/github_actions.png";
import vscodeIcon from "../../public/assets/skills/vs_code.png";
import vercelIcon from "../../public/assets/skills/vercel.png";
import netlifyIcon from "../../public/assets/skills/netlify.png";
import figmaIcon from "../../public/assets/skills/figma.png";
import chromeIcon from "../../public/assets/skills/chrome_devtools.png";
import numpyIcon from "../../public/assets/skills/numpy.png";
import pandasIcon from "../../public/assets/skills/pandas.png";
import matplotlibIcon from "../../public/assets/skills/matplotlib.png";
import { FloatingElement, RevealOnScroll } from "./Animations/ScrollAnimations";
import Image, { StaticImageData } from "next/image";
import { HoverGlow, TiltCard } from "./Animations/InteractiveElements";
import { ModernCard } from "./ModernCard";
import { BlurText, FadeInText } from "./Animations/TextReveal";
import { IconType } from "react-icons";

// const skills = [
//   // Languages
//   {
//     name: "C++",
//     img: cppIcon,
//     category: "Languages",
//     level: 95,
//     color: "from-blue-600 to-purple-600",
//   },
//   {
//     name: "Java",
//     img: javaIcon,
//     category: "Languages",
//     level: 90,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "Python", 
//     img: pythonIcon,
//     category: "Languages",
//     level: 88,
//     color: "from-yellow-500 to-blue-500",
//   },
//   {
//     name: "JavaScript",
//     img: javascriptIcon,
//     category: "Languages",
//     level: 95,
//     color: "from-blue-600 to-purple-600",
//   },
//   {
//     name: "TypeScript",
//     img: typescriptIcon,
//     category: "Languages",
//     level: 95,
//     color: "from-blue-600 to-purple-600",
//   },
//   // {
//   //   name: "Go",
//   //   img: goIcon,
//   //   category: "Languages",
//   //   level: 75,
//   //   color: "from-cyan-400 to-blue-500",
//   // },
//   {
//     name: "SQL", 
//     img: sqlIcon,
//     category: "Languages",
//     level: 90,
//     color: "from-blue-500 to-cyan-500",
//   },
//   // Web Technologies
//   {
//     name: "HTML5",
//     img: htmlIcon,
//     category: "Web Technologies",
//     level: 95,
//     color: "from-orange-500 to-red-500",
//   },
//   {
//     name: "CSS3",
//     img: cssIcon,
//     category: "Web Technologies",
//     level: 92,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "React.js",
//     img: reactIcon,
//     category: "Web Technologies",
//     level: 95,
//     color: "from-cyan-400 to-blue-500",
//   },
//   {
//     name: "Tailwind CSS",
//     img: tailwindIcon,
//     category: "Web Technologies",
//     level: 92,
//     color: "from-teal-400 to-cyan-500",
//   },
//   {
//     name: "Node.js",
//     img: nodejsIcon,
//     category: "Web Technologies",
//     level: 88,
//     color: "from-green-500 to-emerald-600",
//   },
//   {
//     name: "REST APIs",
//     img: apiIcon,
//     category: "Web Technologies",
//     level: 92,
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "NextJS",
//     img: nextIcon,
//     category: "Web Technologies",
//     level: 90,
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "NestJS",
//     img: nestIcon,
//     category: "Web Technologies",
//     level: 88,
//     color: "from-purple-500 to-pink-500",
//   },
//   // Databases
//   {
//     name: "MongoDB",
//     img: mongodbIcon,
//     category: "Databases",
//     level: 88,
//     color: "from-green-600 to-green-800",
//   },
//   {
//     name: "MySQL",
//     img: mysqlIcon,
//     category: "Databases",
//     level: 90,
//     color: "from-blue-600 to-orange-500",
//   },
//   {
//     name: "Firebase",
//     img: firebaseIcon,
//     category: "Databases",
//     level: 75,
//     color: "from-yellow-500 to-red-500",
//   },
//   {
//     name: "PostgreSQL",
//     img: postgreSQLIcon,
//     category: "Databases",
//     level: 85,
//     color: "from-yellow-500 to-red-500",
//   },

//   // Tools & Platforms
//   {
//     name: "Git",
//     img: gitIcon,
//     category: "Tools & Platforms",
//     level: 92,
//     color: "from-orange-500 to-red-600",
//   },
//   {
//     name: "GitHub",
//     img: githubIcon,
//     category: "Tools & Platforms",
//     level: 92,
//     color: "from-gray-700 to-black",
//   },
//   {
//     name: "Postman",
//     img: postmanIcon,
//     category: "Tools & Platforms",
//     level: 85,
//     color: "from-orange-500 to-red-500",
//   },
//   {
//     name: "Docker",
//     img: dockerIcon,
//     category: "Tools & Platforms",
//     level: 75,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "GitHub Actions",
//     img: githubActionsIcon,
//     category: "Tools & Platforms",
//     level: 88,
//     color: "from-gray-600 to-blue-600",
//   },
//   {
//     name: "VS Code",
//     img: vscodeIcon,
//     category: "Tools & Platforms",
//     level: 95,
//     color: "from-blue-600 to-cyan-500",
//   },

//   // Deployment
//   {
//     name: "Vercel",
//     img: vercelIcon,
//     category: "Deployment",
//     level: 75,
//     color: "from-gray-900 to-black",
//   },
//   {
//     name: "Netlify",
//     img: netlifyIcon,
//     category: "Deployment",
//     level: 70,
//     color: "from-teal-400 to-cyan-500",
//   },
//   // {
//   //   name: "Render",
//   //   img: renderIcon,
//   //   category: "Deployment",
//   //   level: 80,
//   //   color: "from-purple-500 to-pink-500",
//   // },
//   {
//     name: "Firebase Hosting",
//     img: firebaseIcon,
//     category: "Deployment",
//     level: 70,
//     color: "from-yellow-500 to-red-500",
//   },

//   // Design
//   {
//     name: "Figma",
//     img: figmaIcon,
//     category: "Design",
//     level: 85,
//     color: "from-purple-500 to-pink-500",
//   },

//   // Others
//   {
//     name: "Firebase Auth",
//     img: firebaseIcon,
//     category: "Others",
//     level: 80,
//     color: "from-yellow-500 to-red-500",
//   },
//   {
//     name: "Chrome DevTools",
//     img: chromeIcon,
//     category: "Others",
//     level: 75,
//     color: "from-red-500 to-yellow-500",
//   },
//   // {
//   //   name: "Markdown",
//   //   img: markdownIcon,
//   //   category: "Others",
//   //   level: 90,
//   //   color: "from-gray-600 to-gray-800",
//   // },

//   // ML & Data
//   {
//     name: "NumPy",
//     img: numpyIcon,
//     category: "ML & Data",
//     level: 80,
//     color: "from-blue-600 to-cyan-600",
//   },
//   {
//     name: "Pandas",
//     img: pandasIcon,
//     category: "ML & Data",
//     level: 78,
//     color: "from-purple-600 to-pink-600",
//   },
//   {
//     name: "Matplotlib",
//     img: matplotlibIcon,
//     category: "ML & Data",
//     level: 75,
//     color: "from-blue-500 to-green-500",
//   },
//   // {
//   //   name: "PyTorch",
//   //   img: pytorchIcon,
//   //   category: "ML & Data",
//   //   level: 70,
//   //   color: "from-orange-500 to-red-500",
//   // },
// ];
const skills = [
  // Languages
  {
    name: "C++",
    img: cppIcon,
    category: "Languages",
    level: 95,
    color: "from-emerald-500 to-green-600", // Expert level (95)
  },
  {
    name: "Java",
    img: javaIcon,
    category: "Languages",
    level: 90,
    color: "from-blue-500 to-cyan-500", // Advanced level (90)
  },
  {
    name: "Python", 
    img: pythonIcon,
    category: "Languages",
    level: 88,
    color: "from-indigo-500 to-purple-500", // Advanced level (88)
  },
  {
    name: "JavaScript",
    img: javascriptIcon,
    category: "Languages",
    level: 95,
    color: "from-emerald-500 to-green-600", // Expert level (95)
  },
  {
    name: "TypeScript",
    img: typescriptIcon,
    category: "Languages",
    level: 95,
    color: "from-emerald-500 to-green-600", // Expert level (95)
  },
  {
    name: "SQL", 
    img: sqlIcon,
    category: "Languages",
    level: 90,
    color: "from-blue-500 to-cyan-500", // Advanced level (90)
  },

  // Web Technologies
  {
    name: "HTML5",
    img: htmlIcon,
    category: "Web Technologies",
    level: 95,
    color: "from-emerald-500 to-green-600", // Expert level (95)
  },
  {
    name: "CSS3",
    img: cssIcon,
    category: "Web Technologies",
    level: 92,
    color: "from-teal-500 to-cyan-600", // Advanced level (92)
  },
  {
    name: "React.js",
    img: reactIcon,
    category: "Web Technologies",
    level: 95,
    color: "from-emerald-500 to-green-600", // Expert level (95)
  },
  {
    name: "Tailwind CSS",
    img: tailwindIcon,
    category: "Web Technologies",
    level: 92,
    color: "from-teal-500 to-cyan-600", // Advanced level (92)
  },
  {
    name: "Node.js",
    img: nodejsIcon,
    category: "Web Technologies",
    level: 88,
    color: "from-indigo-500 to-purple-500", // Advanced level (88)
  },
  {
    name: "REST APIs",
    img: apiIcon,
    category: "Web Technologies",
    level: 92,
    color: "from-teal-500 to-cyan-600", // Advanced level (92)
  },
  {
    name: "NextJS",
    img: nextIcon,
    category: "Web Technologies",
    level: 90,
    color: "from-blue-500 to-cyan-500", // Advanced level (90)
  },
  {
    name: "NestJS",
    img: nestIcon,
    category: "Web Technologies",
    level: 88,
    color: "from-indigo-500 to-purple-500", // Advanced level (88)
  },

  // Databases
  {
    name: "MongoDB",
    img: mongodbIcon,
    category: "Databases",
    level: 88,
    color: "from-indigo-500 to-purple-500", // Advanced level (88)
  },
  {
    name: "MySQL",
    img: mysqlIcon,
    category: "Databases",
    level: 90,
    color: "from-blue-500 to-cyan-500", // Advanced level (90)
  },
  {
    name: "Firebase",
    img: firebaseIcon,
    category: "Databases",
    level: 75,
    color: "from-yellow-500 to-orange-500", // Intermediate level (75)
  },
  {
    name: "PostgreSQL",
    img: postgreSQLIcon,
    category: "Databases",
    level: 85,
    color: "from-violet-500 to-purple-600", // Intermediate level (85)
  },

  // Tools & Platforms
  {
    name: "Git",
    img: gitIcon,
    category: "Tools & Platforms",
    level: 92,
    color: "from-teal-500 to-cyan-600", // Advanced level (92)
  },
  {
    name: "GitHub",
    img: githubIcon,
    category: "Tools & Platforms",
    level: 92,
    color: "from-teal-500 to-cyan-600", // Advanced level (92)
  },
  {
    name: "Postman",
    img: postmanIcon,
    category: "Tools & Platforms",
    level: 85,
    color: "from-violet-500 to-purple-600", // Intermediate level (85)
  },
  {
    name: "Docker",
    img: dockerIcon,
    category: "Tools & Platforms",
    level: 80,
    color: "from-violet-500 to-purple-600", // Intermediate level (75)
  },
  {
    name: "GitHub Actions",
    img: githubActionsIcon,
    category: "Tools & Platforms",
    level: 88,
    color: "from-indigo-500 to-purple-500", // Advanced level (88)
  },
  {
    name: "VS Code",
    img: vscodeIcon,
    category: "Tools & Platforms",
    level: 95,
    color: "from-emerald-500 to-green-600", // Expert level (95)
  },

  // Deployment
  {
    name: "Vercel",
    img: vercelIcon,
    category: "Deployment",
    level: 75,
    color: "from-yellow-500 to-orange-500", // Intermediate level (75)
  },
  {
    name: "Netlify",
    img: netlifyIcon,
    category: "Deployment",
    level: 70,
    color: "from-orange-500 to-red-500", // Beginner level (70)
  },
  {
    name: "Firebase Hosting",
    img: firebaseIcon,
    category: "Deployment",
    level: 70,
    color: "from-orange-500 to-red-500", // Beginner level (70)
  },

  // Design
  {
    name: "Figma",
    img: figmaIcon,
    category: "Design",
    level: 85,
    color: "from-violet-500 to-purple-600", // Intermediate level (85)
  },

  // Others
  {
    name: "Firebase Auth",
    img: firebaseIcon,
    category: "Others",
    level: 80,
    color: "from-pink-500 to-rose-500", // Intermediate level (80)
  },
  {
    name: "Chrome DevTools",
    img: chromeIcon,
    category: "Others",
    level: 75,
    color: "from-yellow-500 to-orange-500", // Intermediate level (75)
  },

  // ML & Data
  {
    name: "NumPy",
    img: numpyIcon,
    category: "ML & Data",
    level: 80,
    color: "from-pink-500 to-rose-500", // Intermediate level (80)
  },
  {
    name: "Pandas",
    img: pandasIcon,
    category: "ML & Data",
    level: 78,
    color: "from-pink-500 to-rose-500", // Intermediate level (78)
  },
  {
    name: "Matplotlib",
    img: matplotlibIcon,
    category: "ML & Data",
    level: 75,
    color: "from-yellow-500 to-orange-500", // Intermediate level (75)
  },
];

// Color scheme reference:
// Expert (95): from-emerald-500 to-green-600 (Green - mastery)
// Advanced High (92): from-teal-500 to-cyan-600 (Teal/Cyan - very good)
// Advanced (88-90): from-blue-500 to-cyan-500 & from-indigo-500 to-purple-500 (Blue/Purple - good)
// Intermediate High (85): from-violet-500 to-purple-600 (Violet - decent)
// Intermediate (75-80): from-yellow-500 to-orange-500 & from-pink-500 to-rose-500 (Warm colors - learning)
// Beginner (70): from-orange-500 to-red-500 (Red/Orange - starting)
const categories = [
  "Languages",
  "Web Technologies",
  "Databases",
  "Tools & Platforms",
  "Deployment",
  "Design",
  "Others",
  "ML & Data",
];

interface SkillCardProps {
  skill: {
    img: StaticImageData;
    name: string;
    category: string;
    level: number;
    color: string;
  };
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <RevealOnScroll delay={index * 0.05} direction="up" className=" dark:border-none">
      <TiltCard maxTilt={8}>
        <HoverGlow>
          <ModernCard
            variant="glass"
            className="p-6 h-full group cursor-pointer overflow-hidden relative"
          >
            {/* Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              initial={false}
            />

            <div className="relative z-10">
              <FloatingElement intensity={5} duration={3}>
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10" />
                  <div className="relative w-full h-full p-3">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      width={80}
                      height={80}
                    />
                  </div>
                </motion.div>
              </FloatingElement>

              <motion.h3
                className="text-lg font-bold text-center mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.h3>

              {/* Skill Level Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <motion.div
                  className="text-center text-sm font-medium text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.div>
              </div>
            </div>
          </ModernCard>
        </HoverGlow>
      </TiltCard>
    </RevealOnScroll>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Languages");

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <section
      id="skills"
      className="relative p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                SKILLS
              </BlurText>
            </motion.h1>
          </FadeInText>

          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Technologies and tools I use to bring ideas to life
            </p>
          </FadeInText>

          {/* Category Filter */}
          <motion.div
            className="flex justify-center gap-2 mb-12 flex-wrap max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white/10 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Count Display */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredSkills.length} skills in {selectedCategory}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
