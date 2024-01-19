import { styled } from "styled-components";

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  width: 700px;
  height: 60px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: end;
  .non-active {
    color: #878787;
  }
`;

const Button = styled.button`
  font-family: "PyeongChang-B";
  font-size: 0.9375em;
  display: flex;
  align-items: center;
  margin-right: 26px;
  cursor: pointer;
`;

const List = styled.div`
  width: 100%;
  height: 146px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
  }
`;

const ImageBox = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 25px;
`;

const ContentBox = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
`;

const ContentHead = styled.span`
  font-family: "PyeongChang-B";
  font-size: 1.6875em;
`;

const ContentDay = styled.div`
  font-family: "PyeongChang-B";
  font-size: 1.125em;
  margin: 11px 0px 8px 0px;
  color: #8e8e8e;
`;

const ContentPrice = styled.div`
  font-family: "PyeongChang-B";
  font-size: 1em;
  color: #8e8e8e;
  display: flex;
  align-items: center;
  .cookielogo {
    margin-left: 4px;
  }
`;

export {
  ListBox,
  ButtonBox,
  Button,
  List,
  ImageBox,
  ContentBox,
  ContentHead,
  ContentDay,
  ContentPrice,
};
