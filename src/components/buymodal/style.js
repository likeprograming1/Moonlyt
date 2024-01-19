import { styled } from "styled-components";

const BuyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.33);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin-top: -120px;
  z-index: 999;
`;

const BuyBoxs = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  color: black;
  font-family: "PyeongChang-B";
  font-size: 1.563em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  justify-content: space-evenly;
  padding: 0px 50px;
  margin-top: 17px;
`;

const Button = styled.button`
  width: 125px;
  height: 100%;
  max-height: 40px;
  color: white;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: black;
  border-radius: 6px;
  cursor: pointer;
  :hover{
    cursor: pointer;
  }
`;

export { BuyContainer, BuyBoxs, TextBox, ButtonBox, Button };