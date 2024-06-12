import React from "react";
import "./App.css";
import Feed from "./feed/Feed";
import { useMediaQuery } from "react-responsive";
import { AppContainer, Header, MainContent } from "./css/app.css";

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
