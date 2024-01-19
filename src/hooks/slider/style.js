import { styled } from "styled-components";

const Slide = styled.div`
  position: relative;
  margin-left: -10px;
  margin-left: 25px;
  @media screen and (max-width: 600px) {
    top: -200px;
  }
`;

const SlideUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -5%;
`;

const SlideLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  z-index: 9998;
`;

const ImgBox = styled.img`
  width: 1264px;
  @media screen and (max-width: 1500px) {
    width: 90vw;
  }
`;

const PreviewLi = styled.li`
  margin-right: -52px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const PreviewRi = styled.li`
  margin-left: -55px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const Preview = styled.img`
  width: 1100px;
  height: 650px;
  filter: brightness(60%);
  @media screen and (max-width: 1500px) {
    width: 80vw;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  right: -250px;
  top: 45%;
  filter: brightness(60%);
  @media screen and (max-width: 600px) {
    top: 47.5%;
  }
  &:hover {
    filter: brightness(100%);
  }
  .Right {
    @media screen and (max-width: 600px) {
      width: 40px;
    }
  }
`;

const Play = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

const NextButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  left: -250px;
  top: 45%;
  filter: brightness(60%);
  @media screen and (max-width: 600px) {
    top: 47.5%;
  }
  &:hover {
    filter: brightness(100%);
  }
  .Left {
    @media screen and (max-width: 600px) {
      width: 40px;
    }
  }
`;

const IndexUl = styled.ul`
  left: 12.5%;
  bottom: 3%;
  position: absolute;
  display: flex;
`;

const IndexLi = styled.li`
  list-style: none;
  margin: 0 12.5px;
  .btn {
    cursor: pointer;
    border: none;
    background: none;
    padding: 10px;
    z-index: 99;
  }
`;

export {
  Slide,
  SlideUl,
  SlideLi,
  ImgBox,
  Button,
  Preview,
  PreviewLi,
  PreviewRi,
  NextButton,
  Play,
  IndexUl,
  IndexLi,
};
