import { styled } from "styled-components";

const CommonButton = styled.div`
  padding: 10px 17px;
  background-color: ${({ $type }) => {
    return $type === "Category" ? "#E43C22" : "black";
  }};
  margin-right: 10px;
  border-radius: 6px;
  font-family: "PyeongChang-R";
  font-size: 0.75em;
  color: white;
  display: flex;
  align-items: center;
`;
const CloseButton = styled.button`
  margin-left: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ImgBox = styled.img`
`;

export { CommonButton, CloseButton, ImgBox };