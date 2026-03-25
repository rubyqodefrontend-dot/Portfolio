import type { Variants } from "motion";
import type { DefaultTheme } from "styled-components";

  export const  containerVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  export const  itemVariants:Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  export const  lightTheme:DefaultTheme  = {
    mode: "light",
  };
  
  export const  darkTheme :DefaultTheme = {
    mode: "dark",
  };

  export const chatInitialMessage={
      id: 1,
      text: "Hi! I'm an AI assistant based on this student's profile. Ask me anything about their education, skills, or background!",
      sender: "ai",
    }