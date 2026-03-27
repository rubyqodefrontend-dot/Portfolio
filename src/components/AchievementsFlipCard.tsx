import {
  AchievementCard,
  AchievementDesc,
  AchievementGlow,
  AchievementTitle,
  YearBadge,
  AchievementCardContainer
} from "./styles";
import type { Achievement } from "../types";

interface AchievementsFlipCardProps {
  achievements: Achievement[];
}
const AchievementsFlipCard = ({ achievements }: AchievementsFlipCardProps) => {
  return (
    <AchievementCardContainer>
      {achievements?.map((ach) => (
        <AchievementCard key={ach.id}>
          <AchievementGlow />
          <AchievementTitle>
            {ach.title}
            <YearBadge>{ach.year}</YearBadge>
          </AchievementTitle>

          <AchievementDesc>{ach.description}</AchievementDesc>
        </AchievementCard>
      ))}
    </AchievementCardContainer>
  );
};

export default AchievementsFlipCard;
