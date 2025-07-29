"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Journey from "@/components/Journey";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative font-serif"
          >
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-[#e2e2e2] via-[#f0f0f0] to-[#e8e8e8] dark:from-[#00040f] dark:via-[#001122] dark:to-[#000811] -z-10" />

            {/* Moving Blurs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
              <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 270, 180, 90, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <About />
              <Journey/>
              <Skills />
              <Experience/>
              <Projects />
              {/* <Achievements /> */}
              <Contact /> 
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;