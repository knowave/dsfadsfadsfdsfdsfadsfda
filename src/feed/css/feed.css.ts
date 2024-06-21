// import styled from "styled-components";

// export const FeedContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 20px;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const MobileFeedContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
//   padding: 10px;
// `;

// export const Card = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// export const NoItemsMessage = styled.div`
//   text-align: center;
//   color: #555;
//   margin-top: 20px;
// `;

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
