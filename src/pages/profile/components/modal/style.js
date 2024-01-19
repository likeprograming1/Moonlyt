import { styled } from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.33);
  margin-top: -170px;
  position: absolute;
  z-index: 999;
`;

const ModalBoxs = styled.div`
  width: 800px;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  overflow: scroll;
  overflow-x: hidden;
`;

const ModalBox = styled.div`
  width: 730px;
  margin: 0 auto;
  padding: 46px 0px;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div``;

const ContentAdviseBox = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
`;

const ContentAdvise =styled.li`
  line-height: 20px;
  font-size: 0.750em;
  color: #b5b5b5;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const CotentImageBox = styled.div`
  display: flex;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 33px;
`;

const CautionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Caution = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  border: 1px solid var(--Boxborder);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const ContentUl = styled.ul`
  margin-top: 7px;
`;

const ContentLi = styled.li`
  list-style: none;
  width: 100%;
  max-width: 375px;
  color: #707070;
  font-family: "PyeongChang-R";
  font-size: 0.75em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

const MainTitle = styled.div`
  color: #000;
  font-family: "PyeongChang-B";
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:last-child{
    margin-top: 7px;
  }
`;

const SubTitle = styled.div`
  color: #000;
  font-family: "PyeongChang-R";
  font-size: 0.750em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

const WebtoonImgBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
`;

export {
  ModalContainer,
  ModalBoxs,
  ModalBox,
  ContentBox,
  ContentAdviseBox,
  ContentAdvise,
  ButtonBox,
  CotentImageBox,
  ImageBox,
  Caution,
  CautionBox,
  ContentUl,
  ContentLi,
  MainTitle,
  SubTitle,
  WebtoonImgBox,
};