import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 130%;
  background-color: rgba(0, 0, 0, 0.33);
  margin-top: -890px;
`;

const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  display: flex;
  background-color: white;
  width: 1200px;
  height: 1000px;
`;
const ContentContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 25px;
`;

const ProductTitle = styled.div`
  width: 100%;
  color: #000;
  font-family: "PyeongChang-B";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const COntentBox = styled.div`
  border: 1px solid #e0e0e0;
  margin-top: 11px;
  width: 100%;
  padding: 53px 50px;
`;

const ContentTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => {
    return props.just;
  }};
`;
const ContentTitle = styled.div`
  font-family: "PyeongChang-B";
  font-size: 1.22em;
  margin-right: 20px;
`;

const ContentHot = styled.div`
  max-width: 65px;
  padding: 15px 14px;
  font-size: 1.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: var(--Color);
  color: white;
  font-family: "Caprasimo";
`;

const Content = styled.div`
  width: ${(props) => {
    return props.Width;
  }};
  margin-top: ${(props) => {
    return props.Height ? props.Height : "26.7px";
  }};
  color: #787878;
`;

const Bar = styled.div`
  margin-top: 33px;
  margin-bottom: 35px;
  border-bottom: 1px solid #e0e0e0;
`;

const NftBtns = styled.button`
  width: ${(props) => {
    return props.width ? props.width : "110px";
  }};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Color);
  border-radius: 12px;
  font-family: "PyeongChang-B";
  font-size: 1.11em;
  color: white;
  cursor: pointer;
`;
export {
  Container,
  ModalBox,
  ModalContainer,
  ContentContainer,
  ProductTitle,
  COntentBox,
  ContentTitle,
  ContentHot,
  ContentTitleBox,
  Content,
  Bar,
  NftBtns,
};
