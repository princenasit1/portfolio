import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Award, Calendar, Trophy, ExternalLink, Sparkles } from "lucide-react";

import certificate2 from "../../public/assets/certificates/d40f9085-adcc-4307-9432-8358986e4392.png";
import { RevealOnScroll } from "./Animations/ScrollAnimations";
import {
  HoverGlow,
  MagneticButton,
  TiltCard,
} from "./Animations/InteractiveElements";
import { ModernCard } from "./ModernCard";
import { Button } from "./Button";
import { BlurText, FadeInText } from "./Animations/TextReveal";
import { JSX } from "react";

// ---------- Type Definitions ----------
interface Achievement {
  id: number;
  title: string;
  issuer?: string;
  rank: string;
  organization?: string;
  date: string;
  description: string;
  category: string;
  type: "Winner" | "Achievement" | "Participation" | 'Learning';
  img?: string | StaticImageData;
  link?: string;
  featured?: boolean;
  participants: string;
  skills: string[];
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

// ---------- Achievement Data ----------
const achievements: Achievement[] = [
  {
    id: 1,
    title: "MINeD Hackathon 2024",
    rank: "2nd Place",
    issuer: "Nirma University",
    date: "Apr 2024",
    category: "Programming",
    type: "Achievement",
    img: certificate2,
    link: "https://certificate.givemycertificate.com/c/d40f9085-adcc-4307-9432-8358986e4392",
    featured: true,
    participants: "500+",
    skills: ["Python", "Machine Learning", "Natural Language Processing"],
    description:
      "Achieved 2nd rank in track provided by REVELIO LABS at MINeD Hackathon 2024, organized by Nirma University.",
  },
//   {
//     title: "Complete 2024 Web Development Bootcamp",
//     issuer: "Udemy",
//     date: "June 2024",
//     description:
//       "Participated in Frontend Battle 2.0 competition with CarbonTrack - a carbon footprint tracking platform built with React and TypeScript. The project features interactive charts, emission calculations, and smart sustainability tips, demonstrating advanced frontend development skills.",
//     category: "Full Stack Development",
//     type: "Learning",
//     img: certificate1,
//     link: "",
//     featured: false,
//   },
//   {
//     title: "Meritorious Student Award (Academic Year:2023-24)",
//     organization:
//       "Govt. of India Secretariat Co-operative Thrift & Credit Society Ltd.",
//     date: "October 2024",
//     description:
//       "Honored to receive the Meritorious Student Award for securing 90% in CBSE Class 12th exams with focus on Physics, Chemistry, and Mathematics. Awarded to students scoring 90% and above, along with ₹1,500 appreciation cheque.",
//     category: "Academic",
//     type: "Achievement",
//     img: pic2,
//     link: "",
//   },
//   {
//     title: "Meritorious Student Award (Academic Year:2021-22)",
//     organization:
//       "Govt. of India Secretariat Co-operative Thrift & Credit Society Ltd.",
//     date: "October 2022",
//     description:
//       "Received the Meritorious Student Award for securing 94% in CBSE Class 10th exams while studying at ML Khanna DAV Public School. Awarded to students scoring 90% and above, along with ₹1,500 appreciation cheque.",
//     category: "Academic",
//     type: "Achievement",
//     img: pic1,
//     link: "",
//   },
];

// ---------- Achievement Card Component ----------
const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
}) => {
  const getIcon = (): JSX.Element => {
    switch (achievement.type) {
      case "Winner":
        return <Trophy className="w-6 h-6" />;
      case "Achievement":
        return <Award className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getIconColor = (): string => {
    switch (achievement.type) {
      case "Winner":
        return "text-yellow-500";
      case "Achievement":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getCategoryColor = (): string => {
    switch (achievement.category) {
      case "Frontend":
        return "bg-gradient-to-r from-blue-600 to-cyan-600";
      case "Academic":
        return "bg-gradient-to-r from-blue-600 to-cyan-600";
      case "Programming":
        return "bg-gradient-to-r from-blue-600 to-cyan-600";
      default:
        return "bg-gradient-to-r from-blue-600 to-cyan-600";
    }
  };

  return (
    <RevealOnScroll delay={index * 0.1} direction="up">
      <TiltCard maxTilt={5}>
        <HoverGlow>
          <ModernCard
            variant="glass"
            className={`h-full group cursor-pointer overflow-hidden relative flex flex-col
                            border border-gray-200/60 dark:border-gray-700/30
                            bg-white/80 dark:bg-gray-800/50
                            shadow-lg dark:shadow-none
                            backdrop-blur-sm
                            ${
                              achievement.featured
                                ? "md:col-span-2 lg:col-span-2"
                                : ""
                            }`}
          >
            {/* Featured Badge */}
            {achievement.featured && (
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

            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            <div className="relative z-10 p-6 flex flex-col h-full">
              {/* Achievement Icon/Image */}
              <motion.div
                className="relative mb-6 overflow-hidden rounded-xl flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden flex items-center justify-center">
                  {achievement.img ? (
                    <Image
                      src={achievement.img}
                      alt={achievement.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={achievement.featured}
                    />
                  ) : (
                    <motion.div
                      className={`${getIconColor()} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-xl">
                        {getIcon()}
                      </div>
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Overlay Button */}
                {achievement.link && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <MagneticButton>
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(achievement.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </MagneticButton>
                  </motion.div>
                )}
              </motion.div>

              {/* Achievement Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <motion.h3
                    className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {achievement.title}
                  </motion.h3>

                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor()} text-white shadow-sm whitespace-nowrap flex-shrink-0`}
                  >
                    {achievement.category}
                  </span>
                </div>

                {/* Issuer & Date */}
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">
                      {achievement.issuer || achievement.organization}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                  {achievement.description}
                </p>

                {/* Achievement Type Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <motion.div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`${getIconColor()}`}>{getIcon()}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {achievement.type}
                    </span>
                  </motion.div>
                </div>

                {/* Action Button */}
                {achievement.link && (
                  <div className="mt-auto">
                    <MagneticButton className="w-full">
                      <Button
                        className="w-full group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                        onClick={() => window.open(achievement.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        View Certificate
                      </Button>
                    </MagneticButton>
                  </div>
                )}
              </div>
            </div>
          </ModernCard>
        </HoverGlow>
      </TiltCard>
    </RevealOnScroll>
  );
};

// ---------- Achievements Component ----------
const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
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
                ACHIEVEMENTS
              </BlurText>
            </motion.h1>
          </FadeInText>

          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognized achievements and professional accomplishments
            </p>
          </FadeInText>
        </div>

        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
