import React from "react";
import "./App.css";
import styled from "styled-components";
import Feed from "./Feed";
import { useMediaQuery } from "react-responsive";

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const MainContent = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileMessage = styled.div`
  background-color: #61dafb;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  color: white;
`;

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <AppContainer>
      <Header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          {isDesktopOrLaptop
            ? "Welcome to the desktop version of the app!"
            : "You are on the mobile version of the app!"}
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
      <MainContent>
        <Feed />
      </MainContent>
    </AppContainer>
  );
}

export default App;
