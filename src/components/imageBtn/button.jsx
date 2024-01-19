import React from "react";
import { ButtonBox, ButtonImg } from "./style";

const ImgButtons = ({ src, text, scal, right, bottom, last }) => {
  return (
    <ButtonBox $mright={right} $bottom={bottom} $last={last && last}>
      <ButtonImg src={src} alt={text} scal={scal}></ButtonImg>
    </ButtonBox>
  );
};

export default ImgButtons;
