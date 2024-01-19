import { styled } from "styled-components";

const Boxs = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.33);
  margin-top: -120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .NFTArea {
    width: 100%;
    max-width: 800px;
    height: 100%;
    max-height: 1254px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    font-size: 2em;
    background-color: white;
  }
  input {
    padding: 10px;
    width: 200px;
    height: 60px;
    outline: none;
    margin: 10px 0px;
    z-index: 9999;
  }
`;

export { Boxs };
