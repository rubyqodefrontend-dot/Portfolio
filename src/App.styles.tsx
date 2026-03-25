import { motion } from "framer-motion";
import styled from "styled-components";

 export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 2.5rem 1rem;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;

  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(to bottom right, #020617, #020617, #020617)"
      : "linear-gradient(to bottom right, #e0e7ff, #f3e8ff, #ccfbf1)"};

  /* Responsive (md:px-0) */
  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }
`;

/* Container */
 export const Container = styled(motion.div)`
  max-width: 64rem; /* ~max-w-5xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem; /* space-y-12 */
  position: relative;
  z-index: 10;
`;
export const FullScreenMessage = styled.div<{ error?: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;
  background-color: #f8fafc; /* slate-50 */
  color: ${(props) =>
    props.error ? "#ef4444" : "#64748b"}; /* red-500 or slate-500 */
  animation: ${(props) => (props.error ? "none" : "pulse 2s infinite")};

  @media (prefers-color-scheme: dark) {
    background-color: #0f172a; /* slate-900 */
    color: ${(props) =>
      props.error ? "#ef4444" : "#94a3b8"}; /* red-500 or slate-400 */
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;


export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;