import { GraduationCap, Mail, GitCommit } from "lucide-react";
import {
  AvatarImage,
  AvatarOverlay,
  AvatarWrapper,
  Bio,
  Card,
  Content,
  IconBox,
  InfoItem,
  InfoRow,
  SocialButton,
  SocialRow,
  Title,
} from "./styles";
import type { User } from "../types";
import { itemVariants } from "../constant";

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {

  return (
    <Card variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}>
      <AvatarWrapper whileHover={{ scale: 1.05, rotate: -2 }}>
        <AvatarOverlay />
        <AvatarImage
          src={user.profile_image || "/images/profile.jpg"}
          alt="Profile"
        />
      </AvatarWrapper>

      <Content>
        <div>
          <Title
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {user.name}
          </Title>

          <Bio>{user.bio}</Bio>
        </div>

        <InfoRow>
          {user.college && (
            <InfoItem>
              <IconBox>
                <GraduationCap size={18} />
              </IconBox>
              <span>{user.college}</span>
            </InfoItem>
          )}

          {user.email && (
            <InfoItem>
              <IconBox>
                <Mail size={18} />
              </IconBox>
              <span>{user.email}</span>
            </InfoItem>
          )}
        </InfoRow>

        <SocialRow>
          {user.github && (
            <SocialButton
              whileHover={{ y: -4 }}
              href={user.github}
              target="_blank"
            >
              <GitCommit size={22} />
            </SocialButton>
          )}

          {user.linkedin && (
            <SocialButton
              whileHover={{ y: -4 }}
              href={user.linkedin}
              target="_blank"
            >
              <GitCommit size={22} />
            </SocialButton>
          )}
        </SocialRow>
      </Content>
    </Card>
  );
};

export default ProfileHeader;
