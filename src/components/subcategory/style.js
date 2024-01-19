import { styled } from "styled-components";

const TitleBox = styled.div`
  margin-bottom: ${({$bottom}) => {
    return $bottom ? $bottom : "0px";
  }};
  .click {
    color: #000;
  }
  .nonClick {
    color: #878787;
  }
`;

const Title = styled.button`
  font-family: "PyeongChang-Bold";
  font-size: 0.94em;
  font-weight: 400;
  cursor: pointer;
  margin-right: ${(props) => {
    return props.right ? props.right : "10px";
  }};
  &:nth-child(
      ${(props) => {
          return props.child;
        }}
    ) {
    margin-right: ${(props) => {
      return props.right ? props.right : "10px";
    }};
  }
`;

export { TitleBox, Title };
