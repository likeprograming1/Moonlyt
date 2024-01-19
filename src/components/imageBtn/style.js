import { styled } from "styled-components";

const ButtonBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: none;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin-right: ${({$mright, $last}) => {
    return $mright ? ($last ? "0px" : $mright) : "8px";
  }};
  margin-bottom: ${({$bottom}) => {
    return $bottom ? $bottom : "0px";
  }};
  z-index: 999;
  &:last-child {
    margin-right: 0px;
  }
`;

const ButtonImg = styled.img`
  &:hover {
    transition: 1s;
    scale: ${(props) => {
      return props.scal ? "calc(1.2)" : "";
    }};
  }
`;

export { ButtonBox, ButtonImg };
