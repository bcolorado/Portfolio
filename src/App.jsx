import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, wrapperStyle } from "./utils/Themes";
import {
  Navbar,
  HeroSection,
  Education,
  Skills,
  Experience,
  Projects,
  Footer,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { ProjectDetails } from "./components/Dialog/ProjectDetails";

const Body = styled.div`
  background-color: ${darkTheme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: ${wrapperStyle.bg};
  width: 100%;
  padding-bottom: 30px;
  clip-path: ${wrapperStyle.clipPath};
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
            {/* <Education /> */}
          </Wrapper>
          <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>

          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
