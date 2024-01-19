import { styled } from "styled-components";
import "../../styles/font/font.css";

const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
`;

const FooterBoxs = styled.div`
  max-width: 1267px;
  height: 379px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FooterBox = styled.div`
  display: flex;
  margin-bottom: 66.53px;
  .active {
    color: white;
  }
`;

const Span = styled.span`
  font-family: "PyeongChang-Bold";
  margin-right: 28px;
  color: var(--FooterSpan);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterImg = styled.img`
  margin-right: 9px;
`;

export { FooterContainer, FooterBoxs, FooterBox, Span, FooterImg };
