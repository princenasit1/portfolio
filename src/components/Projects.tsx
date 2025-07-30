import { motion } from "framer-motion";

import carbontrack from "../../public/assets/projects/carbontrack.png";
import FinManager from "../../public/assets/projects/FinManager.png";
import lms from "../../public/assets/projects/lms.png";

import { Github, ExternalLink, Code, Sparkles } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiMysql,
  SiFigma,
  SiPrisma,
  SiPostgresql,
  SiStripe,
  SiPython,
  SiPandas,
  SiStreamlit,
  SiScikitlearn,
  SiPytorch,
  SiNextdotjs,
} from "react-icons/si";
import { RevealOnScroll } from "./Animations/ScrollAnimations";
import {
  HoverGlow,
  MagneticButton,
  TiltCard,
} from "./Animations/InteractiveElements";
import { ModernCard } from "./ModernCard";
import { Button } from "./Button";
import { BlurText, FadeInText } from "./Animations/TextReveal";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

// ---------- Type Definitions ----------
interface Tech {
  icon: React.ElementType;
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  img: StaticImageData;
  link?: string;
  github_link: string;
  tech: Tech[];
  category: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// ---------- Project Data ----------
const projects: Project[] = [
  {
    title: "FinanceManager",
    description:
      "A comprehensive finance tracker with transaction monitoring, account management, and real-time market updates. Features multi-currency / multi-language support and AI-powered sentiment analysis.",
    img: FinManager,
    // link: "https://medicalq.vercel.app/",
    github_link: "https://github.com/abhinav-phi/MedicalQ",
    tech: [
      { icon: SiReact, name: "React", color: "text-blue-500" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
      { icon: SiExpress, name: "Express.js", color: "text-blue-400" },
      { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
      { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
      { icon: SiFigma, name: "Figma", color: "text-pink-500" },
      { icon: SiPrisma, name: "Prisma ORM", color: "text-blue-700" },
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "LMS",
    description:
      "A modern, full-featured e-learning platform offering secure user authentication, seamless payment integration, and adaptive video streaming using HLS. Enables personalized learning experiences with interactive quizzes, progress tracking, and automated certificate generation.",
    img: lms,
    // link: "https://abhinavphi.vercel.app",
    github_link: "https://github.com/abhinav-phi/personal-website",
    tech: [
      { icon: SiNextdotjs, name: "Next", color: "text-black" },
      { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
      { icon: SiPrisma, name: "Prisma ORM", color: "text-blue-500" },
      { icon: SiTypescript, name: "TyeScript", color: "text-blue-600" },
      { icon: SiPostgresql, name: "NeonDB", color: "text-yellow-500" },
      { icon: SiStripe, name: "Stripe", color: "text-purple-800" },
      { icon: SiJavascript, name: "HLS.js", color: "text-yellow-500" },
    ],
    category: "Full Stack",
  },
  {
    title: "Resume Parser",
    description:
      "A comprehensive resume parser with multi-format support, section classification, and job title standardization. Features advanced skill extraction and prediction using NLP models, powered by the O*NET taxonomy and project-based intelligence.",
    img: carbontrack,
    // link: "https://carbontrack-hackathon-r1.vercel.app",
    github_link: "https://github.com/PrinceNasit/Resume-Parser",
    tech: [
      { icon: SiPython, name: "Python", color: "text-blue-500" },
      { icon: SiPandas, name: "Pandas", color: "text-blue-600" },
      { icon: SiStreamlit, name: "Streamlit", color: "text-teal-500" },
      { icon: SiScikitlearn, name: "Scikit-learn", color: "text-pink-500" },
      { icon: SiPytorch, name: "PyTorch", color: "text-pink-500" },
    ],
    category: "Frontend",
  },
  // {
  //   title: "CF-Helper-Tool",
  //   description:
  //     "Chrome extension for competitive programming that assists with Codeforces problem solving using multiple AI models.",
  //   img: cf_tool,
  //   link: "",
  //   github_link: "https://github.com/abhinav-phi/CF-Helper-Tool",
  //   tech: [
  //     { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
  //     { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
  //     { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
  //     { icon: SiGooglechrome, name: "Chrome APIs", color: "text-green-500" },
  //   ],
  //   category: "Browser Extension",
  // },
  // {
  //   title: "Bookstore API",
  //   description:
  //     "RESTful API for bookstore inventory management with complete CRUD operations, built with clean architecture principles.",
  //   img: bookstore,
  //   link: "",
  //   github_link: "https://github.com/abhinav-phi/bookstore-api",
  //   tech: [
  //     { icon: SiGo, name: "Go", color: "text-blue-400" },
  //     { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
  //     { icon: SiDocker, name: "Docker", color: "text-blue-500" },
  //   ],
  //   category: "Backend",
  // },
];

// ---------- ProjectCard Component ----------
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <RevealOnScroll delay={index * 0.1} direction="up">
    <TiltCard maxTilt={5}>
      <HoverGlow>
        <ModernCard
          variant="glass"
          className={`max-h-[650px] group cursor-pointer overflow-hidden relative flex flex-col
            border border-gray-200/60 dark:border-gray-700/30 
            bg-gray-100/30 dark:bg-gray-800/50 
            shadow-lg dark:shadow-none
            backdrop-blur-sm
            ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
        >
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Featured
              </div>
            </motion.div>
          )}

          <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 p-6 flex flex-col h-full">
            <motion.div
              className="relative mb-6 overflow-hidden rounded-xl flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.link && (
                  <MagneticButton>
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </MagneticButton>
                )}
                {project.github_link && (
                  <MagneticButton>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-900/90 text-white border-gray-700 hover:bg-gray-800 shadow-lg backdrop-blur-sm"
                      onClick={() => window.open(project.github_link, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </MagneticButton>
                )}
              </motion.div>
            </motion.div>

            <div className="flex flex-col flex-grow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <motion.h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </motion.h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm whitespace-nowrap flex-shrink-0">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 ">
                {project.tech.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 shadow-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${techIndex * 0.1}s` }}
                    >
                      <Icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* <div className="flex gap-3 mt-auto">
                {project.github_link && (
                  <MagneticButton className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full group/btn border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-black dark:text-white hover:text-black dark:hover:text-white bg-white/70 dark:bg-gray-800/50"
                      onClick={() => window.open(project.github_link, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </Button>
                  </MagneticButton>
                )}
                {project.link && (
                  <MagneticButton className="flex-1">
                    <Button
                      className="w-full group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Live Demo
                    </Button>
                  </MagneticButton>
                )}
              </div> */}
            </div>
          </div>
        </ModernCard>
      </HoverGlow>
    </TiltCard>
  </RevealOnScroll>
);

// ---------- Projects Component ----------
const Projects: React.FC = () => (
  <section
    id="projects"
    className="relative p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
  >
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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
              PROJECTS
            </BlurText>
          </motion.h1>
        </FadeInText>

        <FadeInText delay={0.3}>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my creative work and technical expertise
          </p>
        </FadeInText>

        <FadeInText delay={0.5}>
          <motion.div
            className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="w-5 h-5" />
            <span className="text-sm font-medium">Scroll to explore</span>
          </motion.div>
        </FadeInText>
      </div>

      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[30vh]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
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
            <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </MagneticButton>
      </motion.div>
    </div>
  </section>
);

export default Projects;
