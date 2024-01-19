import { styled } from "styled-components";


const ModalTitle = styled.div`
  font-family: "PyeongChang-B";
  font-size: 2.188em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: ${({$bottom}) => {
    return $bottom;
  }};
`;

const ContentBoxs = styled.div`
  margin-bottom: 33px;
`;

const ModalSubTitle = styled.div`
  font-family: "PyeongChang-B";
  font-size: 1.313em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--SubTitle);
  margin-bottom: 15px;
`;

export { ModalTitle, ModalSubTitle, ContentBoxs };