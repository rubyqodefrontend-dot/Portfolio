import { GraduationCap, Mail } from "lucide-react";
import { SocialIcon } from 'react-social-icons';
import styled from "styled-components";

import {
  AvatarImage,
  AvatarOverlay,
  AvatarWrapper,
  Bio,
  Card,
  Content,
  InfoItem,
  InfoRow,
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
                <StyledGraduationCap size={20} />
              <span>{user.college}</span>
            </InfoItem>
          )}

          {user.email && (
            <InfoItem>
                <StyledMail size={20} />
              <span>{user.email}</span>
            </InfoItem>
          )}
        </InfoRow>
        <SocialRow>
          {user.github && (
            <SocialIcon url={user?.github} target="_blank" style={{ height: 35, width: 35 }} />
          )}
          {user.linkedin && (
            <SocialIcon url={user?.linkedin} target="_blank" style={{ height: 35, width: 35 }} />
          )}
        </SocialRow>
      </Content>
    </Card>
  );
};

export default ProfileHeader;

const iconStyles = ({ theme }: { theme: { mode: string  } }) => `
  background: ${theme.mode === "dark" ? "rgba(99,102,241,0.2)" : "#eef2ff"};
  padding: 0.5rem;
  border-radius: 9999px;
`;

const StyledGraduationCap = styled(GraduationCap)`
  ${iconStyles}
`;

const StyledMail = styled(Mail)`
  ${iconStyles}
`;
