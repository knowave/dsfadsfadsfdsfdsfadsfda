import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

interface FeedItem {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
}

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const MobileFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const NoItemsMessage = styled.div`
  text-align: center;
  color: #555;
  margin-top: 20px;
`;

const Feed: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/feed");
        console.log("response: ", response.data);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching the feed items:", error);
      }
    };

    fetchData();
  }, []);

  if (items.length === 0) {
    return (
      <NoItemsMessage>
        아직 게시글이 없어요 😢 함께 게시글을 추가하러 가볼까요?
      </NoItemsMessage>
    );
  }

  return isDesktopOrLaptop ? (
    <FeedContainer>
      {items.map((item, index) => (
        <Card key={index}>
          <img src={item.thumbnail} className="App-logo" alt="logo" />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </Card>
      ))}
    </FeedContainer>
  ) : (
    <MobileFeedContainer>
      {items.map((item, index) => (
        <Card key={index}>
          <img src={item.thumbnail} className="App-logo" alt="logo" />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </Card>
      ))}
    </MobileFeedContainer>
  );
};

export default Feed;
