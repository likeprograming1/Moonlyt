import { styled } from "styled-components";

const WebtoonSearch = styled.div`
  border: 1px solid #e0e0e0;
  background: #fff;
  box-shadow: 5px 11px 22px 5px rgba(0, 0, 0, 0.1);
  padding: 59px 0px;
  margin-right: 70px;
  width: 486px;
  height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackBlur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BackImg = styled.img`
  position: absolute;
  width: 374px;
  height: 374px;
  filter: blur(3px);
`;

const FrontImg = styled.img`
  position: relative;
  width: 80%;
  height: 80%;
`;

const Title = styled.div`
  font-family: "PyeongChang-B";
  font-size: 2.0625em;
  margin-top: 15px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorName = styled.div`
  font-family: "PyeongChang-B";
  font-size: 1.0625em;
  color: #9c9c9c;
  margin: 15px 0px;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const CategoryButton = styled.button`
  font-family: "Caprasimo";
  font-size: 1.125em;
  color: white;
  border-radius: 12px;
  background-color: var(--Color);
  padding: 14px 17px;
  margin-right: 6px;
  margin-bottom: 15px;
  &:last-child {
    margin-right: 0px;
  }
`;

const Content = styled.div`
  font-family: "PyeongChang-R";
  font-size: 1em;
  width: 260px;
  color: #909090;
  /* margin-bottom: 15px; */
`;

const Bts = styled.button`
  font-family: "PyeongChang-B";
  color: white;
  width: 374px;
  font-size: 1.375em;
  border-radius: 12px;
  background-color: black;
  margin-bottom: 37px;
  padding: 22px 0px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Pool = styled.div`
  color: #000;
  font-family: "PyeongChang-B";
  font-size: 20px;
`;

export {
  WebtoonSearch,
  BackImg,
  BackBlur,
  FrontImg,
  Title,
  AuthorName,
  CategoryButton,
  ButtonBox,
  Content,
  Bts,
};
