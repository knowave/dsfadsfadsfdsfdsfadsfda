import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  img {
    width: 100%;
    border-radius: 10px;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    color: #666;
  }
`;

export const NoItemsMessage = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 1.2em;
  color: #888;
`;
