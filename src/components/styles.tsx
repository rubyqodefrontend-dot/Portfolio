import { motion } from "framer-motion";
import styled from "styled-components";

/* Card */
export const Card = styled(motion.div)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  border-top: 4px solid
    ${({ theme }) => (theme.mode === "dark" ? "#818cf8" : "#6366f1")};

  border-radius: 1.5rem;
  transition: all 0.4s ease;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(135deg, rgba(30,41,59,0.9), rgba(30,41,59,0.9))"
      : "linear-gradient(135deg, rgba(238,242,255,0.9), rgba(239,246,255,0.9))"};

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 10px 30px rgba(0,0,0,0.6)"
      : "0 10px 25px rgba(0,0,0,0.08)"};

  backdrop-filter: blur(14px);

  position: relative;
  overflow: hidden;

  /* ✨ Hover Effects */
  &:hover {
    box-shadow: ${({ theme }) =>
      theme.mode === "dark"
        ? "0 20px 50px rgba(0,0,0,0.8)"
        : "0 20px 40px rgba(99,102,241,0.15)"};

    border-top-color: transparent; /* remove top border */

    /* optional glow border effect */
    outline: none;
  }

  /* ✨ Gradient glow overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(99, 102, 241, 0.15),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
/* Profile Image */
export const AvatarWrapper = styled(motion.div)`
  position: relative;
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;

  border: 6px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#ffffff")};

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
`;

export const AvatarOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, #6366f1, #2dd4bf);
  opacity: 0.2;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`; /* Content */
export const Content = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;

  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const Bio = styled.p`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;

  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
`;
/* Info Row */
export const InfoRow = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 600;
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5f5" : "#475569")};
`;

export const IconBox = styled.div`
  padding: 0.5rem;
  border-radius: 9999px;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(99,102,241,0.2)" : "#eef2ff"};
`;
/* Social Links */
export const SocialRow = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialButton = styled(motion.a)`
  padding: 0.75rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  transition: all 0.3s ease;

  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#4f46e5")};

  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#4338ca"};
  }
`;

/* Wrapper */
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

/* Toolbar container */
export const Container = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 9999px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(30, 41, 59, 0.7)"
      : "rgba(255, 255, 255, 0.7)"};

  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#e2e8f0")};

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

/* Button */
export const Button = styled.button<{ active?: boolean }>`
  padding: 8px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.25s ease;

  background: ${({ theme, active }) =>
    active
      ? theme.mode === "dark"
        ? "rgba(99, 102, 241, 0.3)"
        : "#e0e7ff"
      : "transparent"};

  color: ${({ theme, active }) =>
    active
      ? theme.mode === "dark"
        ? "#818cf8"
        : "#4f46e5"
      : theme.mode === "dark"
        ? "#94a3b8"
        : "#64748b"};

  &:hover {
    transform: translateY(-1px);

    color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#334155")};
  }
`;

export const CardWrapper = styled(motion.div)<{ expanded: boolean }>`
  width: 100%;
  cursor: pointer;
  perspective: 1000px;

  @media (min-width: 768px) {
    grid-column: ${({ expanded }) => (expanded ? "span 2" : "span 1")};
  }
`;

/* Inner flip container */
export const CardInner = styled(motion.div)`
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
`;
/* Shared face styles */
export const Face = styled.div<{ themeMode?: string }>`
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 10px 30px rgba(0,0,0,0.6)"
      : "0 10px 25px rgba(0,0,0,0.1)"};
`;

/* Front */
export const FrontFace = styled(Face)<{ bg?: string; flipped: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  color: white;
  z-index: 2;

  background: ${({ bg }) =>
    bg || "linear-gradient(135deg, #6366f1, #14b8a6)"};

  position: ${({ flipped }) => (flipped ? "absolute" : "relative")};
  height: ${({ flipped }) => (flipped ? "100%" : "400px")};
  overflow: hidden;
`;


/* Back */
export const BackFace = styled(Face)<{ flipped: boolean }>`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  z-index: 1;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(30,41,59,0.95)"
      : "rgba(255,255,255,0.95)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#e2e8f0"};

  backdrop-filter: blur(12px);

  position: ${({ flipped }) => (flipped ? "relative" : "absolute")};
  height: ${({ flipped }) =>
    flipped ? "auto" : "100%"};

  min-height: 400px;
  overflow: hidden;
`;

/* Header inside back */
export const BackHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;

  border-bottom: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#e2e8f0"};

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#f1f5f9" : "#1e293b"};

  font-weight: 700;
`;

export const IconBoxFC = styled.div<{ bg?: string }>`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ bg }) => bg || "#6366f1"};
  color: white;
`;

export const ContentFC= styled.div`
  flex: 1;
  width: 100%;
`;

export const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  width: 2px;
  height: 100%;

  background: linear-gradient(
    to bottom,
    rgba(99, 102, 241, 0.3),
    transparent
  );
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
`;

export const TimelineIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#312e81" : "#e0e7ff"};

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#818cf8" : "#4f46e5"};

  border: 3px solid
    ${({ theme }) =>
      theme.mode === "dark" ? "#1e293b" : "#ffffff"};

  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const TimelineCard = styled.div`
  flex: 1;
  padding: 1rem;
  border-radius: 1rem;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(15,23,42,0.5)"
      : "rgba(248,250,252,0.6)"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#e2e8f0"};
`;

export const Degree = styled.div`
  font-weight: 700;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#f1f5f9" : "#1e293b"};
`;

export const TimeBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 999px;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(99,102,241,0.3)"
      : "#e0e7ff"};

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#c7d2fe" : "#4f46e5"};
`;

export const Institution = styled.div`
  font-size: 14px;
  margin-top: 4px;

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#94a3b8" : "#64748b"};
`;

export const Grade = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 10px;
  border-radius: 8px;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "#1e293b" : "#ffffff"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#e2e8f0"};
`;

export const AchievementCard = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(120,53,15,0.15)"
      : "linear-gradient(to right, #fff7ed, #ffedd5)"};

  border: 1px solid rgba(251,146,60,0.3);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const AchievementGlow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  height: 90px;

  background: radial-gradient(
    circle,
    rgba(251,146,60,0.2),
    transparent
  );
`;

export const AchievementTitle = styled.div`
  font-weight: 700;
  margin-bottom: 6px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#fde68a" : "#9a3412"};
`;

export const YearBadge = styled.span`
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 999px;

  background: rgba(255,255,255,0.6);
`;

export const AchievementDesc = styled.div`
  font-size: 14px;

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5f5" : "#475569"};
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const SkillChip = styled.span`
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(15,23,42,0.6)"
      : "#f8fafc"};

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#e2e8f0"};

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5f5" : "#334155"};

  transition: all 0.25s ease;

  &:hover {
    border-color: #14b8a6;
    transform: translateY(-2px);
  }
`;

export const HobbyCard = styled.div`
  padding: 1.25rem;
  border-radius: 1rem;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(136, 19, 55, 0.10)"   /* dark:rose-900/10 */
      : "rgba(255, 241, 242, 0.5)"}; /* rose-50/50 */

  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(136, 19, 55, 0.3)"   /* dark:border-rose-900/30 */
        : "#ffe4e6"};                /* border-rose-100 */

  backdrop-filter: blur(6px);
`;

export const HobbyText = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 500;

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#cbd5f5" : "#334155"}; /* slate-300 / slate-700 */
`;