import { styled } from "styled-components";

const ModalBoxs = styled.div`
  z-index: 999;
  position: absolute;
  width: 307px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PointBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ea6955;
  padding: 0px 23px;
`;

const Span = styled.span`
  font-family: "PyeongChang-B";
  color: white;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 100%;
  border: 0.5px solid #e0e0e0;
  border-top: none;
  height: ${(props) => {
    return props.height ? props.height : "57px";
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ModalSpan = styled.button`
  font-family: "PyeongChang-R";
  font-size: 0.88em;
  color: #5e5e5e;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const ModalBtn = styled.button`
  position: relative;
  width: 82px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) => {
    return props.state ? "white" : "black";
  }};
  transition: 0.3s ease-in-out;
  outline: none;
  cursor: pointer;
  translate: 1s;
  .title {
    font-size: 13px;
    font-family: "PyeongChang-B";
    color: ${(props) => {
      return props.state ? "black" : "white";
    }};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: ${(props) => {
      return props.state ? "3px" : "0px";
    }};
    margin-left: ${(props) => {
      return props.state ? "-20px" : "20px";
    }};
  }
`;

const ModalOne = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${(props) => {
    return props.state ? "#E43C22" : "white";
  }};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.state ? "translateX(55px)" : "translateX(0)")};
  border-radius: 50%;
  ${(props) => {
    return props.state ? { marginRight: "3px" } : { marginLeft: "3px" };
  }}
  right: ${(props) => {
    return props.state ? "55px" : "58px";
  }}
`;

export { ModalBox, ModalBoxs, PointBox, Span, ModalSpan, ModalBtn, ModalOne };
