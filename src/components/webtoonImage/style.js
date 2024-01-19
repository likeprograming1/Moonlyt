import { styled } from "styled-components";

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 64.63px;
  grid-row-gap: 114px;
  margin-bottom: ${({$bottom}) => {
    return $bottom ? $bottom : "0px";
  }};
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.button`
  cursor: pointer;
`;

const Image = styled.img``;

const Title = styled.span`
  font-family: "PyeongChang-Bold";
  font-size: 1.563em;
  margin-top: 24.48px;
  margin-bottom: 14.92px;
`;
const Author = styled.span`
  font-size: 1em;
  font-family: "PyeongChang-R";
  margin-bottom: 21.79px;
`;
const ViewCate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Cate = styled.div`
  display: flex;
  align-items: center;
  .view {
    margin-right: 7px;
  }
`;

const Gory = styled.div`
  font-family: "PyeongChang-B";
  width: 95px;
  height: 40px;
  background-color: var(--Color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em;
  color: white;
  margin-right: 11.35px;
`;

export { ImgBox, Image, Title, Box, Author, ViewCate, Cate, Gory, ButtonBox };
