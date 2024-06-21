import React from "react";
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
        <p>
          {isDesktopOrLaptop
            ? "Welcome to the desktop version of the app!"
            : "You are on the mobile version of the app!"}
        </p>
      </Header>
      <MainContent>
        <Feed />
      </MainContent>
    </AppContainer>
  );
}

export default App;
