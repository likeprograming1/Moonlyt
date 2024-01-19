import React from "react";
import {
  FooterBox,
  FooterBoxs,
  FooterContainer,
  FooterImg,
  Span,
} from "./style";
import Logo from "../../images/footer/Footer.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBoxs>
        <FooterBox>
          <Span>Business Information</Span>
          <Span>Terms of Use</Span>
          <Span className="active">Privacy Policy</Span>
          <Span>Youth Protection Policy</Span>
          <Span>Custom Service</Span>
          <Span>About MoonLight</Span>
        </FooterBox>
        <Span>
          <FooterImg src={Logo} alt="FooterImage"></FooterImg>MOONLIGHT
        </Span>
      </FooterBoxs>
    </FooterContainer>
  );
};

export default Footer;
