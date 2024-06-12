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
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const MainContent = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileMessage = styled.div`
  background-color: #61dafb;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  color: white;
`;
