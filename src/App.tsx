import React from "react";
import Feed from "./feed/Feed";
import { AppContainer, Header, MainContent } from "./css/app.css";

function App() {
  return (
    <AppContainer>
      <Header>
        <p>반려동물을 위한 모든 것들</p>
      </Header>
      <MainContent>
        <Feed />
      </MainContent>
    </AppContainer>
  );
}

export default App;
