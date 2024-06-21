import styled from "styled-components";

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  max-width: 100%;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666666;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const NoItemsMessage = styled.div`
  color: #666666;
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
`;
