import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  padding: 10px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;
