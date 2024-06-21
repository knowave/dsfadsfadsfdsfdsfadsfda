import React from "react";
import Feed from "./feed/Feed";
import { AppContainer, Header, MainContent } from "./css/app.css";

function App() {
  return (
    <AppContainer>
      <Header>
        <h2>반려동물을 위한 모든 것들</h2>
      </Header>
      <MainContent>
        <Feed />
      </MainContent>
    </AppContainer>
  );
}

export default App;
