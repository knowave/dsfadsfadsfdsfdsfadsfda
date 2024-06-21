import React, { useEffect, useState } from "react";
import { Card, FeedContainer, NoItemsMessage } from "./css/feed.css";
import { FeedItem } from "./interfaces/feed-item.interface";
import { fetchFeedItems } from "./axios/get-public-feeds";

const Feed: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFeedItems();
      setItems(data);
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

  return (
    <FeedContainer>
      {items.map((item, index) => (
        <Card key={index}>
          <img src={item.thumbnail} className="App-logo" alt="logo" />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </Card>
      ))}
    </FeedContainer>
  );
};

export default Feed;
