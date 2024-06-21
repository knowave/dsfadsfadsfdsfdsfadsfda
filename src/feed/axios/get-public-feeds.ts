import axios from "axios";
import { mockFeedItems } from "../mock/feed-items.mock";

export const fetchFeedItems = async () => {
  try {
    const response = await axios.get("http://localhost:8080/feed");

    if (response.data.length === 0) {
      return mockFeedItems;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching the feed items:", error);
    return mockFeedItems;
  }
};
