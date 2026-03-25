// ================= USER =================
export interface User {
  id: number;
  name: string;
  college: string;
  email: string;
  github: string;
  linkedin: string;
  hobbies: string;
  bio: string;
  profile_image: string;
}

// ================= EDUCATION =================
export interface Education {
  id: number;
  user_id: number;
  degree: string;
  institution: string;
  start_year: number;
  end_year: number;
  grade: string;
}

// ================= SKILLS =================
export interface Skill {
  id: number;
  user_id: number;
  skill_name: string;
  category: string;
}

// ================= ACHIEVEMENTS =================
export interface Achievement {
  id: number;
  user_id: number;
  title: string;
  description: string;
  year: number;
}

// ================= FULL API RESPONSE =================
export interface ProfileResponse {
  user: User;
  education: Education[];
  skills: Skill[];
  achievements: Achievement[];
}