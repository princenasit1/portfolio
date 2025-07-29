import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "./Animations/ScrollAnimations";
import {
  HoverGlow,
  MagneticButton,
  TiltCard,
} from "./Animations/InteractiveElements";
import { ModernCard } from "./ModernCard";
import { BlurText, FadeInText } from "./Animations/TextReveal";
import {  LuArrowRight } from "react-icons/lu";
import { Button } from "./Button";

const experiences = [
  {
    id: 1,
    position: "Associate Software Developer",
    company: "DRC Systems India Limited",
    duration: "Jan 2025 - Present",
    location: "GIFT City, Gandhinagar, India",
    type: "Full-time",
    description:
      "Contributing to the development of a project management tool, enhancing user efficiency through modular design, real-time communication, and Agile delivery practices.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Next.js",
      "Nest.js",
      "TypeScript",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Web Sockets",
      "REST APIs",
      "Agile",
      "Git",
      "Docker",
      "AWS",
    ],
    achievements: [
      "Engineered and deployed 6+ modules for a project management tool used by 500+ users",
      "Integrated REST APIs and WebSockets to reduce data sync delays by 30%",
      "Implemented CI/CD pipeline and Involved in Agile ceremonies to enhance team collaboration",
    ],
    color: "from-blue-600 to-cyan-600",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  //   {
  //     id: 2,
  //     position: "Frontend Developer",
  //     company: "Digital Solutions Ltd.",
  //     duration: "Aug 2021 - Dec 2022",
  //     location: "Remote",
  //     type: "Full-time",
  //     description: "Developed responsive web applications and collaborated with UX/UI designers to create intuitive user interfaces. Focused on performance optimization and accessibility.",
  //     technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  //     achievements: [
  //       "Improved user engagement by 35%",
  //       "Built 15+ responsive web applications",
  //       "Mentored 3 junior developers"
  //     ],
  //     color: "from-purple-600 to-pink-600",
  //     bgColor: "from-purple-500/10 to-pink-500/10"
  //   },
  {
    id: 3,
    position: "Frontend Developer Intern",
    company: "Ethniqsoft Solutions",
    duration: "May 2024 - Jun 2024",
    location: "Surat, India",
    type: "Internship",
    description:
      "Contributed to full-stack development projects using modern web technologies. Gained experience in agile development methodologies and version control systems.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "REST APIs",
      "TailwindCSS",
      "Git",
      "Postman",
    ],
    achievements: [
      "Developed 3 key features for main product",
      "Fixed 20+ bugs and issues",
      "Learned agile development practices",
    ],
    color: "from-green-600 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
  //   {
  //     id: 4,
  //     position: "Freelance Web Developer",
  //     company: "Self-Employed",
  //     duration: "Jan 2020 - May 2021",
  //     location: "Remote",
  //     type: "Freelance",
  //     description: "Provided web development services to small businesses and startups. Created custom websites and web applications tailored to client needs.",
  //     technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  //     achievements: [
  //       "Completed 25+ client projects",
  //       "Maintained 98% client satisfaction rate",
  //       "Built long-term client relationships"
  //     ],
  //     color: "from-orange-600 to-red-600",
  //     bgColor: "from-orange-500/10 to-red-500/10"
  //   }
];

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  index: number;
  isLeft: boolean;
}

const ExperienceCard = ({ experience, index, isLeft }: ExperienceCardProps) => {
  return (
    <RevealOnScroll
      delay={index * 0.2}
      direction={isLeft ? "left" : "right"}
      className="w-full"
    >
      <div
        className={`flex items-center ${
          isLeft ? "flex-row" : "flex-row-reverse"
        } gap-8 max-lg:flex-col max-lg:gap-4`}
      >
        {/* Timeline dot and line */}
        <div className="flex-shrink-0 relative">
          <motion.div
            className={`w-6 h-6 rounded-full bg-gradient-to-r ${experience.color} shadow-lg relative z-10`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3 }}
            whileHover={{ scale: 1.3 }}
          />
          {index !== experiences.length - 1 && (
            <motion.div
              className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"
              initial={{ height: 0 }}
              whileInView={{ height: 96 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
            />
          )}
        </div>

        {/* Experience Card */}
        <div className={`flex-1 ${isLeft ? "max-lg:ml-0" : "max-lg:mr-0"}`}>
          <TiltCard maxTilt={5}>
            <HoverGlow>
              <ModernCard
                variant="glass"
                className="p-6 group cursor-pointer overflow-hidden relative"
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${experience.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2 max-sm:flex-col max-sm:gap-2">
                      <motion.h3
                        className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {experience.position}
                      </motion.h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white`}
                      >
                        {experience.type}
                      </span>
                    </div>

                    <motion.div
                      className="space-y-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {experience.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 max-sm:flex-col max-sm:items-start max-sm:gap-1">
                        <span>{experience.duration}</span>
                        <span className="max-sm:hidden">•</span>
                        <span>{experience.location}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {experience.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-white/10 dark:bg-gray-800/50 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400 border border-white/20 dark:border-gray-700"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + 0.7 + techIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + 0.9 + achIndex * 0.1,
                          }}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </ModernCard>
            </HoverGlow>
          </TiltCard>
        </div>
      </div>
    </RevealOnScroll>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative p-5 mx-20 mb-10 mt-20 font-['Poppins'] max-sm:p-2 max-sm:mx-5 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 25,
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
                EXPERIENCE
              </BlurText>
            </motion.h1>
          </FadeInText>

          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              My professional journey and career milestones
            </p>
          </FadeInText>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-8 max-sm:gap-4 max-sm:flex-col max-sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                1+
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                5+
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                2
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Companies
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <MagneticButton>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group/btn"
              onClick={() =>
                window.open(
                  "https://github.com/PrinceNasit?tab=repositories",
                  "_blank"
                )
              }
            >
              Want to work together?
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <LuArrowRight className="w-5 h-5" strokeWidth={4} size={40} />
              </motion.span>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
