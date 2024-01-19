import React from "react";
import Close from "../../images/button/close.png";
import { CloseButton, CommonButton, ImgBox } from "./style";

const Button = (props) => {
  const { text, type, onClick } = props;
  return (
    <CommonButton $type={type}>
      {text}
      <CloseButton onClick={onClick}>
        <ImgBox src={Close} alt="CloseButtonImg" />
      </CloseButton>
    </CommonButton>
  );
};

export default Button;
