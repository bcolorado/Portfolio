import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, wrapperStyle } from "./utils/Themes";
import { Navbar, HeroSection, Education, Skills, Experience } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${darkTheme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: ${wrapperStyle.bg};
  width: 100%;
  clip-path: ${wrapperStyle.clipPath};
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience/>
            <Education />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
