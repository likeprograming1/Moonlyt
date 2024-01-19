import { styled } from "styled-components";

const InvestBoxs = styled.div`
  padding: 36.03px 48px 36.03px 45.29px;
  border: 1px solid #c1c1c1;
  display: flex;
  margin-bottom: 34px;
  &:last-child {
    margin-bottom: 138.95px;
  }
`;

const Image = styled.img`
  width: 369px;
  height: 292px;
  margin-right: 48px;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

const ContentTitle = styled.span`
  font-family: "PyeongChang-Bold";
  font-size: 2.0625em;
  margin-bottom: 28px;
`;

const ContentAuthor = styled.span`
  font-family: "PyeongChang-R";
  color: #414141;
  font-size: 1em;
  margin-bottom: 24px;
`;

const ContentVoteTitle = styled.span`
  font-family: "PyeongChang-R";
  color: #414141;
  font-size: 1.1875em;
  margin-bottom: 6px;
`;

const ContentVoteBox = styled.div`
  width: 539.59px;
  height: 16.67px;
  border-radius: 20px;
  border: 1px solid var(--Color);
  margin-bottom: 16px;
`;

const ContentVote = styled.div`
  width: ${(props) => {
    return props.width + "%";
  }};
  height: 100%;
  background-color: var(--Color);
  border-radius: 20px;
`;

const ContentViews = styled.div`
  display: flex;
  align-items: center;
  .image {
    margin-right: 4px;
  }
`;

const ContentView = styled.span`
  font-family: "PyeongChang-R";
  font-size: 0.75em;
  color: #878787;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BuyButton = styled.button`
  font-family: "PyeongChang-B";
  font-size: 1.19em;
  color: white;
  background-color: var(--Color);
  width: 184px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export {
  InvestBoxs,
  Image,
  ContentBox,
  ContentTitle,
  ContentAuthor,
  ContentVoteTitle,
  ContentVoteBox,
  ContentVote,
  ContentViews,
  ContentView,
  TitleBox,
  BuyButton,
};
