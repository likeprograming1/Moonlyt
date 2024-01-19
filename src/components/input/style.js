import { styled } from "styled-components";

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputC = styled.input`
  width: 100%;
  height: ${(props) => {
    return props.Ht ? props.Ht : "50px";
  }};
  border: 1px solid #e0e0e0;
  padding: 0px 13px;
  font-size: 0.75em;
  font-family: "PyeongChang-R";
  &::placeholder {
    color: #b5b5b5;
    font-family: "PyeongChang-R";
  }
`;

const Span = styled.div`
  position: absolute;
  right: 13px;
  font-family: "PyeongChang-R";
  color: #b5b5b5;
  font-size: 0.75em;
`;

export { InputBox, InputC, Span };