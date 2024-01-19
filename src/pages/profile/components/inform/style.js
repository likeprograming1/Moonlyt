import { styled } from "styled-components";

const ContentBox = styled.div`
`;

const AccountBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  position: relative;
  margin-bottom: 76px;
`;

const AccountProfile = styled.img`
  width: 104px;
  height: 104px;
`;

const AccountButton = styled.button`
  position: absolute;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  font-family: "PyeongChang-Bold";
  font-size: 1.375em;
  color: white;
  background-color: #ea6955;
  cursor: pointer;
  right: 0px;
  bottom: 5px;
`;

const ContainerTitle = styled.div`
  font-family: "PyeongChang-B";
  font-size: 2.375em;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({$bottom}) => {
    return $bottom ? $bottom + "px" : "0px";
  }};
  position: relative;
`;

const AddressTitle = styled.div`
  font-family: "PyeongChang-B";
  font-size: 2em;
  margin-bottom: 39px;
`;

const AddressContent = styled.span`
  font-family: "PyeongChang-R";
  color: #333;
  font-size: 1em;
`;

const AccountCommonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({$bottom}) => {
    return $bottom ? $bottom : "0px";
  }};
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AccountCopyBtn = styled.button`
  font-family: "PyeongChang-B";
  background-color: #ea6955;
  font-size: 1em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  border-radius: 12px;
  cursor: pointer;
`;

const LogOutBtn = styled.button`
  width: 100%;
  font-family: "PyeongChang-B";
  background-color: #ea6955;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 54px 0px 54px 36px;
  font-size: 2em;
  color: white;
  border-radius: 22px;
  cursor: pointer;
  margin-bottom: 316px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Color);
  font-family: "PyeongChang-B";
  font-size: 1rem;
  color: white;
  border-radius: 12px;
  position: absolute;
  right: 0px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export {
  ContentBox,
  ContainerTitle,
  AccountBox,
  AccountProfile,
  AccountButton,
  ImageBox,
  AddressTitle,
  AccountCommonBox,
  AddressContent,
  AccountCopyBtn,
  LogOutBtn,
  Button,
};
