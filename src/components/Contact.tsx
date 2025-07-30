"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiGmail,
  SiDiscord,
} from "react-icons/si";
import { Download } from "lucide-react";

import { BlurText, FadeInText } from "./Animations/TextReveal";
import { RevealOnScroll } from "./Animations/ScrollAnimations";
import { MagneticButton, TiltCard } from "./Animations/InteractiveElements";
import { ModernCard } from "./ModernCard";
import { Button } from "./Button";
import { FaHandshake } from "react-icons/fa";
import { IconType } from "react-icons";

type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
  color: string;
  bgColor: string;
  customIcon?: IconType;
};

const socialLinks: SocialLink[] = [
  {
    icon: SiGithub,
    href: "https://github.com/PrinceNasit",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "from-gray-700 to-black",
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/prince-nasit-26248326a/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
    bgColor: "from-blue-600 to-blue-800",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/prince_nasit_/",
    label: "Instagram",
    color: "hover:text-pink-600",
    bgColor: "from-pink-500 to-purple-600",
  },
  {
    icon: SiDiscord,
    href: "https://discord.com/users/prince.nasit",
    label: "Discord",
    color: "hover:text-indigo-600",
    bgColor: "from-indigo-500 to-purple-600",
  },
  {
    icon: SiGmail,
    href: "mailto:princenasit371@gmail.com",
    label: "Email",
    color: "hover:text-red-600",
    bgColor: "from-red-500 to-red-700",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins'] max-sm:p-2 min-h-[90vh]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16 pt-12">
          <FadeInText>
            <motion.h1
              className="text-6xl max-sm:text-4xl font-extrabold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </BlurText>
            </motion.h1>
          </FadeInText>

          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let&apos;s collaborate and build something amazing together
            </p>
          </FadeInText>
        </div>

        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <TiltCard maxTilt={2}>
            <ModernCard variant="glass" className="overflow-hidden" glow>
              <div className="p-8 max-sm:p-6 text-center">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-4 justify-center flex-wrap">
                    {socialLinks.map((social, index) => (
                      <MagneticButton key={social.label}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-14 h-14 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                            type: "spring",
                          }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          />
                          {social.customIcon ? (
                            <Image
                              src={typeof social.customIcon === "string" ? social.customIcon : ""}
                              alt={social.label}
                              className="w-7 h-7 relative z-10 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />
                          ) : (
                            social.icon && (
                              <social.icon className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                            )
                          )}
                        </motion.a>
                      </MagneticButton>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-6 max-sm:flex-col justify-center max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <MagneticButton className="flex-1">
                    <Button
                      className="w-full group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1zcInGUrOZN8W7lElse6HEgdE24uPh9Va/view?usp=sharing",
                          "_blank"
                        )
                      }
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                      Resume
                    </Button>
                  </MagneticButton>

                  {/* <MagneticButton className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full group border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      onClick={() =>
                        window.open(
                          "https://github.com/abhinav-phi/personal-website",
                          "_blank"
                        )
                      }
                    >
                      <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Star Project
                    </Button>
                  </MagneticButton> */}
                  <MagneticButton className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full group border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      onClick={() =>
                        window.open(
                          "mailto:princenasit371@gmail.com?subject=Let's Collaborate",
                          "_blank"
                        )
                      }
                    >
                      <FaHandshake className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      <span className="ml-2 group-hover:underline">
                        Let’s Collaborate
                      </span>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>
            </ModernCard>
          </TiltCard>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
