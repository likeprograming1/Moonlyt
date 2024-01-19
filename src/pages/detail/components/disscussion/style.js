import styled from "styled-components";

export const CommentBox = styled.div`
  width: 100%;
  /* max-width: 951px; */
  /* height: 720px; */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 30px; */
  .CommentInput {
    width: 890px;
    height: 109px;
    border: 1px solid #e0e0e0;
    background: #fff;
    margin-bottom: 18px;
    &::placeholder {
      color: #b5b5b5;
      font-family: "PyeongChang-R";
      font-size: 12px;
    }
  }
  .CommBtn {
    display: flex;
    justify-content: end;
    width: 100%;
    margin-bottom: 10px;
    button {
      cursor: pointer;
      width: 131px;
      height: 42px;
      border: 1px solid #e0e0e0;
      background: #fff;
      color: #000;
      font-family: "PyeongChang-R";
      font-size: 16px;
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
  .Title {
    width: 100%;
    color: #000;
    font-family: "PyeongChang-R";
    font-size: 28px;
  }
`;

export const CommentView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    .UserName {
      color: #000;
      font-family: "PyeongChang-R";
      font-size: 18px;
    }
    .ReportBox {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #797979;
      font-family: "PyeongChang-R";
      font-size: 16px;
      img {
        margin-right: 9px;
      }
    }
  }
  .Contents {
    color: #797979;
    font-family: "PyeongChang-R";
    font-size: 16px;
    margin-bottom: 11px;
  }
  .BtnsBox {
    display: flex;
    align-items: center;
    .Box {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #797979;
      font-family: "PyeongChang-R";
      font-size: 16px;
      margin-right: 20px;
      img {
        margin-right: 6px;
      }
    }
  }
`;
