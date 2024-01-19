import { styled } from "styled-components";
import "../../styles/font/font.css";

const BoxsContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1264px;
  margin: 0 auto;
`;

const MiddleContainer = styled.div`
  margin-top: 120px;
  /* background-color: #a42b18; */
  background-color: var(--Color);
`;

const Nav = styled.div`
  margin-top: 100px;
  margin-bottom: 106px;
`;

const Box = styled.div`
  margin-top: ${(props)=>{
    return props.top ? props.top : "137px"
  }};
  margin-bottom: 39px;
  display: flex;
  align-items: center;
`;

const HotBox = styled.div`
  font-family: "Caprasimo";
  background-color: var(--Color);
  width: 64px;
  height: 50px;
  font-size: 1.13em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 14px;
`;

const BoxTitle = styled.span`
  font-family: "PyeongChang-Bold";
  font-size: 2.5em;
  color: ${(props) => {
    return props.color ? props.color : "#333333";
  }};
`;

// const BoxColum = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const Boxs = styled.div`
  padding-top: ${({$top}) => {
    return $top ? $top : "0px";
  }};
  padding-bottom: ${({$bottom}) => {
    return $bottom ? $bottom : "0px";
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const More = styled.button`
  cursor: pointer;
  font-family: "Caprasimo";
  font-size: 1.38em;
  color: ${(props) => {
    return props.color ? props.color : "black";
  }};
  margin-right: 14px;
`;

export {
  BoxsContainer,
  Container,
  MiddleContainer,
  Nav,
  HotBox,
  Boxs,
  Box,
  BoxTitle,
  More,
};
