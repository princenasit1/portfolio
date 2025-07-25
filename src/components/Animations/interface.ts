export interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface BlurTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export class RevealOnScrollProps {
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  children: React.ReactNode;
}

export interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  intensity?: number;
}

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
}
