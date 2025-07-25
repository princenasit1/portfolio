import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { FloatingElementProps, ParallaxContainerProps, RevealOnScrollProps } from "./interface";

export const ParallaxContainer = memo(({ children, speed = 0.5, className = "" }: ParallaxContainerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
});

ParallaxContainer.displayName = 'ParallaxContainer';

export const RevealOnScroll = memo(({ children, direction = "up", delay = 0, className = "" }: RevealOnScrollProps) => {
  const ref = useRef(null);

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 100, opacity: 0 };
      case "down": return { y: -100, opacity: 0 };
      case "left": return { x: -100, opacity: 0 };
      case "right": return { x: 100, opacity: 0 };
      default: return { y: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

RevealOnScroll.displayName = 'RevealOnScroll';

export const FloatingElement = memo(({ children, intensity = 20, duration = 3, className = "" }: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

FloatingElement.displayName = 'FloatingElement';