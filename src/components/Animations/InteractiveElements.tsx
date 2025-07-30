import { motion } from "framer-motion";
import { useState, memo, useCallback } from "react";
import {
  HoverGlowProps,
  MagneticButtonProps,
  TiltCardProps,
} from "./interface";

export const TiltCard = memo(
  ({ children, className = "", maxTilt = 15 }: TiltCardProps) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget?.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateXValue =
          ((e.clientY - centerY) / (rect.height / 2)) * maxTilt;
        const rotateYValue =
          ((e.clientX - centerX) / (rect.width / 2)) * maxTilt;

        setRotateX(-rotateXValue);
        setRotateY(rotateYValue);
      },
      [maxTilt]
    );

    const handleMouseLeave = useCallback(() => {
      setRotateX(0);
      setRotateY(0);
    }, []);

    return (
      <motion.div
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        style={{
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        }}
      >
        {children}
      </motion.div>
    );
  }
);

TiltCard.displayName = "TiltCard";

export const MagneticButton = memo(
  ({ children, className = "", strength = 0.3 }: MagneticButtonProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setPosition({ x: deltaX, y: deltaY });
      },
      [strength]
    );

    const handleMouseLeave = useCallback(() => {
      setPosition({ x: 0, y: 0 });
    }, []);

    return (
      <motion.div
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={position}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
      >
        {children}
      </motion.div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export const HoverGlow = memo(
  ({ children, className = "" }: HoverGlowProps) => {
    return (
      <motion.div
        className={`relative ${className}`}
        whileHover={{
          boxShadow: `0 0 30px rgba(6, 182, 212, 0.5)`,
          scale: 1.02,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }
);

HoverGlow.displayName = "HoverGlow";
