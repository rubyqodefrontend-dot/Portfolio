import type { Education } from "../types";
import {
  Degree,
  Grade,
  Institution,
  TimeBadge,
  Timeline,
  TimelineCard,
  TimelineIcon,
  TimelineItem,
  TimelineLine,
} from "./styles";
import { CheckCircle2, GraduationCap } from "lucide-react";

interface EducationFlipCardProps {
  education: Education[];
}
const EducationFlipCard = ({ education }: EducationFlipCardProps) => {
  return (
    <Timeline>
      <TimelineLine />

      {education?.map((ed) => (
        <TimelineItem key={ed.id}>
          <TimelineIcon>
            <GraduationCap size={16} />
          </TimelineIcon>

          <TimelineCard>
            <Degree>{ed.degree}</Degree>

            <TimeBadge>
              {ed.start_year} - {ed.end_year}
            </TimeBadge>

            <Institution>{ed.institution}</Institution>

            <Grade>
              <CheckCircle2 size={14} />
              {ed.grade}
            </Grade>
          </TimelineCard>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default EducationFlipCard;
