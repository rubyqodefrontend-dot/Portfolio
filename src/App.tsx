import { useState, useEffect, useRef, type FormEvent } from "react";
import axios from "axios";
import { BookOpen, Award, Code, Heart } from "lucide-react";
import Toolbar from "./components/Toolbar";
import ProfileHeader from "./components/ProfileHeader";
import { ThemeProvider } from "styled-components";
import {
  Container,
  FullScreenMessage,
  GridContainer,
  PageWrapper,
} from "./App.styles";
import FlipCard from "./components/FlipCard";
import EducationFlipCard from "./components/EducationFlipCard";
import SkillFlipCard from "./components/SkillFlipCard";
import AchievementsFlipCard from "./components/AchievementsFlipCard";
import HobbiesFlipCard from "./components/HobbiesFlipCard";
import ChatWidget from "./components/ChatWidget";
import {
  chatInitialMessage,
  containerVariants,
  darkTheme,
  itemVariants,
  lightTheme,
} from "./constant";
import type { ProfileResponse } from "./types";

function App() {
  const [profileData, setProfileData] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([chatInitialMessage]);
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const [resolvedTheme, setResolvedTheme] = useState("light");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (chatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, chatOpen]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/profile`,
      );
      setProfileData(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch profile. Make sure the backend is running.");
      setLoading(false);
    }
  };

  const handleChatSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newQuery = chatInput.trim();
    setChatInput("");
    setChatMessages((prev) => [
      ...prev,
      { id: Date.now(), text: newQuery, sender: "user" },
    ]);
    setChatLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
        question: newQuery,
        profileContext: profileData,
      });

      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: res.data.answer || "Sorry, I couldn't generate a response.",
          sender: "ai",
        },
      ]);
    } catch (err) {
      console.error(err);
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Network error communicating with AI.",
          sender: "ai",
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      } else {
        setResolvedTheme(theme);
      }
    };

    updateTheme();

    // listen for OS changes 🔥
    mediaQuery.addEventListener("change", updateTheme);
    localStorage.setItem("theme", theme);
    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, [theme]);

  if (loading) return <FullScreenMessage>Loading profile...</FullScreenMessage>;
  if (error) return <FullScreenMessage>{error}</FullScreenMessage>;
  if (!profileData) return null;

  const { user, education, skills, achievements } = profileData;

  return (
    <ThemeProvider theme={resolvedTheme === "dark" ? darkTheme : lightTheme}>
      <PageWrapper>
        <Container variants={containerVariants} initial="hidden" animate="show">
          <Toolbar theme={theme} setTheme={setTheme} />

          {/* Profile Header */}
          <ProfileHeader user={user} />
          {/* 3D Interactive Flip Card Grid */}
          <GridContainer
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Education FlipCard */}
            <FlipCard
              isExpandable={true}
              variants={itemVariants}
              title="Education"
              icon={BookOpen}
              frontClass={"linear-gradient(135deg, #6366f1, #2563eb)"}
            >
              <EducationFlipCard education={education} />
            </FlipCard>

            {/* Achievements FlipCard */}
            <FlipCard
              variants={itemVariants}
              title="Achievements"
              icon={Award}
              frontClass={"linear-gradient(135deg, #f59e0b, #ea580c)"}
            >
              <AchievementsFlipCard achievements={achievements} />
            </FlipCard>

            {/* Skills FlipCard */}
            <FlipCard
              variants={itemVariants}
              title="Skills Matrix"
              icon={Code}
              frontClass={"linear-gradient(135deg, #14b8a6, #059669)"}
            >
              <SkillFlipCard skills={skills} />
            </FlipCard>

            {/* Hobbies FlipCard */}
            <FlipCard
              variants={itemVariants}
              title="Hobbies"
              icon={Heart}
              frontClass="#6366f1"
            >
              <HobbiesFlipCard hobbies={user.hobbies} />
            </FlipCard>
          </GridContainer>
        </Container>

        <ChatWidget
          chatOpen={chatOpen}
          setChatOpen={setChatOpen}
          chatMessages={chatMessages}
          chatLoading={chatLoading}
          chatInput={chatInput}
          setChatInput={setChatInput}
          handleChatSubmit={handleChatSubmit}
          chatEndRef={chatEndRef}
          user={user}
        />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
