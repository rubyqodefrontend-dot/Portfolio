import { type ReactNode, useRef, useState } from "react";
import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BackFace,
  BackHeader,
  CardInner,
  CardWrapper,
  ContentFC,
  FrontFace,
  IconBoxFC,
} from "./styles";

interface FlipCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  frontClass?: string; // optional gradient or color
  isExpandable?: boolean;
  variants?: Variants;
}

const FlipCard = ({
  title,
  icon: Icon,
  children,
  frontClass,
  isExpandable = false,
  variants,
}: FlipCardProps) => {
  const [isFlipped, setFlipped] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFlipped(false);
    }, 400);
  };

  return (
    <CardWrapper
      layout
      variants={variants}
      expanded={isExpandable && isFlipped}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setFlipped(!isFlipped)}
    >
      <CardInner
        layout
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 140,
          damping: 18,
        }}
      >
        {/* Front */}
        <FrontFace bg={frontClass} flipped={isFlipped}>
          <Icon size={80} />
          <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>{title}</h2>
        </FrontFace>

        {/* Back */}
        <BackFace flipped={isFlipped}>
          <BackHeader>
            <IconBoxFC bg={frontClass}>
              <Icon size={18} />
            </IconBoxFC>
            {title}
          </BackHeader>

          <ContentFC>{children}</ContentFC>
        </BackFace>
      </CardInner>
    </CardWrapper>
  );
};

export default FlipCard;
