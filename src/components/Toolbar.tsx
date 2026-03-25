import { Sun, Moon, Monitor } from "lucide-react";
import { Button, Container, Wrapper } from "./styles";

interface ToolbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}
const Toolbar = ({ theme, setTheme }: ToolbarProps) => {
  return (
    <Wrapper>
      <Container>
        <Button
          onClick={() => setTheme("light")}
          active={theme === "light"}
          aria-label="Light Theme"
        >
          <Sun size={16} />
        </Button>

        <Button
          onClick={() => setTheme("system")}
          active={theme === "system"}
          aria-label="System Theme"
        >
          <Monitor size={16} />
        </Button>

        <Button
          onClick={() => setTheme("dark")}
          active={theme === "dark"}
          aria-label="Dark Theme"
        >
          <Moon size={16} />
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Toolbar;
