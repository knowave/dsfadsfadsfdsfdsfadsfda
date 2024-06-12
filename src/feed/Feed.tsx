import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { Card, FeedContainer, MobileFeedContainer, NoItemsMessage } from "./css/feed.css";
import { FeedItem } from "./interfaces/feed-item.interface";

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
