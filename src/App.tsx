import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from "./sign-up/SignUp";
import Feed from "./feed/Feed";
import { AppContainer, Header, MainContent, Nav } from "./css/app.css";

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Nav>
            <Link to="/signup">회원 가입</Link>
          </Nav>
          <h2>반려동물을 위한 모든 것들</h2>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
