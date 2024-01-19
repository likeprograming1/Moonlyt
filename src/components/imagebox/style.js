import { styled } from "styled-components";

const BoxContainer = styled.div`
  width: ${({ $width }) => {
    return $width;
  }};
  height: ${({ $height }) => {
    return $height;
  }};
  margin-bottom: ${({ $bottom }) => {
    return $bottom;
  }};
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid black;
`;

const BoxImage = styled.img`
  width: ${({ $width }) => {
    return $width;
  }};
  height: ${({ $height }) => {
    return $height;
  }};
  margin: auto;
`;

export { BoxContainer, BoxImage };