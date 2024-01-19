import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 951px;
  height: 100%;
  max-height: 721px;
  background-color: white;
  padding: 30px;
  position: relative;
  .CloseBtn {
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  .Head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    .Voting {
      color: #000;
      font-family: "PyeongChang-B";
      font-size: 35px;
      margin-bottom: 13px;
    }
    .HeadTitle {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .Episode {
      color: #000;
      font-family: "PyeongChang-R";
      font-size: 18px;
      width: 301px;
      height: 65px;
      flex-shrink: 0;
      border: 1px solid #d9d9d9;
      img {
        cursor: pointer;
        margin-left: 8px;
      }
    }
  }
  .Title {
    color: #000;
    font-family: "PyeongChang-R";
    font-size: 28px;
  }
  .Author,
  .Day {
    color: #797979;
    font-family: "PyeongChang-R";
    font-size: 18px;
  }
  .Day {
    margin-bottom: 25px;
  }
  .ImgBox {
    width: 100%;
    height: 100%;
    max-height: 265px;
    margin-bottom: 25px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .AgreeAfter,
  .SubTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: "PyeongChang-R";
    font-size: 16px;
  }
  .SubTitle {
    margin-bottom: 30px;
  }
  .ButtonBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Agree {
    margin-right: 72px;
  }
  .Btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    max-width: 165px;
    color: #000;
    font-family: "PyeongChang-R";
    border: 1px solid #e0e0e0;
    background: #fff;
    &:hover {
      color: #fff;
      border: 1px solid #e0e0e0;
      background: #000;
    }
  }
`;

export const AgreePercent = styled.div`
  height: 30px;
  border: 1px solid #000;
  margin-bottom: 30px;
  .Bar {
    height: 100%;
    width: ${({ $Percent }) => {
      return $Percent;
    }}%;
    background: #000;
    transition: all 0.5s ease-in;
    z-index: 1;
  }
`;
