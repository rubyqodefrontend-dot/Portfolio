import { HobbyCard, HobbyText } from "./styles";


interface HobbiesFlipCardProps{
  hobbies:string
}
const HobbiesFlipCard = ({ hobbies }:HobbiesFlipCardProps) => {
  return (
    <HobbyCard>
      <HobbyText>{hobbies}</HobbyText>
    </HobbyCard>
  );
};

export default HobbiesFlipCard;
