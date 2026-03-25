import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Bot, X, Send, MessageSquare } from "lucide-react";
import type { User } from "../types";
import type { Ref } from "react";

/* ================= STYLES ================= */

const Wrapper = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ChatBox = styled(motion.div)`
  position: absolute;
  bottom: 5rem;
  right: 0;
  width: 350px;
  max-width: calc(100vw - 3rem);
  height: 500px;
  max-height: 70vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 1rem;
  margin-bottom: 1rem;

  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#ffffff")};

  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#e2e8f0")};

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  background: linear-gradient(90deg, #4f46e5, #7c3aed);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const BotIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Messages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(15,23,42,0.5)" : "rgba(248,250,252,0.5)"};
`;

const MessageBubble = styled(motion.div)<{ sender: string }>`
  padding: 0.9rem;
  font-size: 0.9rem;
  border-radius: 1rem;
  max-width: ${({ sender }) => (sender === "user" ? "85%" : "90%")};

  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};

  color: ${({ sender, theme }) =>
    sender === "user" ? "#fff" : theme.mode === "dark" ? "#cbd5f5" : "#334155"};

  background: ${({ sender, theme }) =>
    sender === "user"
      ? theme.mode === "dark"
        ? "#6366f1"
        : "#1e293b"
      : theme.mode === "dark"
        ? "#1e293b"
        : "#ffffff"};

  border: ${({ sender, theme }) =>
    sender === "user"
      ? "none"
      : `1px solid ${theme.mode === "dark" ? "#334155" : "#e2e8f0"}`};
`;

const InputArea = styled.div`
  padding: 0.75rem;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#f1f5f9")};

  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#ffffff")};
`;

const InputWrapper = styled.form`
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 3rem 0.75rem 1rem;
  border-radius: 0.75rem;

  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#e2e8f0")};

  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#f8fafc")};

  color: ${({ theme }) => (theme.mode === "dark" ? "#fff" : "#000")};

  outline: none;
`;

const SendButton = styled.button`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: #4f46e5;
  color: white;
  border: none;
`;

const FloatingButton = styled(motion.button)<{ open: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  border: none;

  background: ${({ open, theme }) =>
    open ? (theme.mode === "dark" ? "#334155" : "#1e293b") : "#4f46e5"};
`;

/* ================= COMPONENT ================= */
type ChatMessage = {
  id: number;
  text: string;
  sender: string;
};
interface ChatWidgetProps {
  chatOpen: boolean;
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;

  chatMessages: ChatMessage[];
  chatLoading: boolean;

  chatInput: string;
  setChatInput: React.Dispatch<React.SetStateAction<string>>;

  handleChatSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  chatEndRef: Ref<HTMLDivElement>;

  user: User;
}
const ChatWidget = ({
  chatOpen,
  setChatOpen,
  chatMessages,
  chatLoading,
  chatInput,
  setChatInput,
  handleChatSubmit,
  chatEndRef,
  user,
}: ChatWidgetProps) => {
  return (
    <Wrapper>
      <AnimatePresence>
        {chatOpen && (
          <ChatBox
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <Header>
              <HeaderLeft>
                <BotIcon>
                  <Bot size={18} />
                </BotIcon>
                <div>
                  <strong>AI Assistant</strong>
                  <p style={{ fontSize: "10px" }}>
                    Ask about {user?.name?.split(" ")[0]}
                  </p>
                </div>
              </HeaderLeft>

              <button onClick={() => setChatOpen(false)}>
                <X size={18} />
              </button>
            </Header>

            <Messages>
              {chatMessages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  sender={msg.sender}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.text}
                </MessageBubble>
              ))}

              <div ref={chatEndRef} />
            </Messages>

            <InputArea>
              <InputWrapper onSubmit={handleChatSubmit}>
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your question..."
                />
                <SendButton type="submit">
                  <Send size={16} />
                  {chatLoading && <span>...</span>}
                </SendButton>
              </InputWrapper>
            </InputArea>
          </ChatBox>
        )}
      </AnimatePresence>

      <FloatingButton
        open={chatOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </FloatingButton>
    </Wrapper>
  );
};

export default ChatWidget;
