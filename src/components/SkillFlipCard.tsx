import type { Skill } from "../types";
import { SkillChip, SkillsWrapper } from "./styles";

interface SkillFlipCardProps {
  skills: Skill[];
}
const SkillFlipCard = ({ skills }: SkillFlipCardProps) => {
  return (
    <SkillsWrapper>
      {skills?.map((skill) => (
        <SkillChip key={skill.id}>{skill.skill_name}</SkillChip>
      ))}
    </SkillsWrapper>
  );
};

export default SkillFlipCard;
