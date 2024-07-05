import React from "react";
import styled,{createGlobalStyle} from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Achievements from "./components/achievements";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Project from "./components/project";
import Technologies from "./components/technologies";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    font-family: 'Arial', sans-serif;
    color: #fff;
  }
    cards{
    background color:#1e1e1e;
    color:#fff;
    border-radiusd: 10px;
    padding: 1.5rem;
    box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom:100vh; 
    }
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 8rem;
`;
const ContentContainer = styled.div`
  flex-grow: 1;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          
          <Navbar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/project" element={<Project />} />
              <Route path="/technologies" element={<Technologies />} />
            </Routes>
          </ContentContainer>
        </AppContainer>
      </Router>
    </>
  );
};
const HomePage= () => {
  return(
    <>
    <Hero/>
    <Project/>
    <Technologies/>
    <About/>
    <Achievements/>
    </>
  )

}

export default App;
