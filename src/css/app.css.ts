import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 10px;
  right: 10px;

  a {
    color: #61dafb;
    text-decoration: none;
  }
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
