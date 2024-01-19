import { styled } from "styled-components";

const WebtoonContainer = styled.div`
  max-width: 1267px;
  position: relative;
  margin-bottom: 3px;
  .Abtn {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const WebtoonBox = styled.button`
  border: none;
  background-color: none;
  margin-right: 8px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
`;

const RightArrow = styled.div`
  z-index: 999;
  position: absolute;
  right: -10px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LeftArrow = styled.div`
  z-index: 999;
  position: absolute;
  left: -25px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const WebtoonImg = styled.img`
  &:hover {
    transition: 1s;
    scale: calc(1.2);
  }
`;

const ArrowImg = styled.img``;

const WebtoonSpan = styled.span`
  font-family: "Caprasimo";
  font-size: 1.38em;
  position: absolute;
  width: 100%;
  bottom: 53px;
  z-index: 99;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  WebtoonContainer,
  WebtoonBox,
  WebtoonImg,
  WebtoonSpan,
  RightArrow,
  LeftArrow,
  ArrowImg,
};
