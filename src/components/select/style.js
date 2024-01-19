import { styled } from "styled-components";

const SelectBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${(props) => {
    return props.Show ? "60px" : "0px";
  }};
  cursor: pointer;
`;

const Label = styled.label`
  width: 100%;
  color: var(--Inputplace);
  font-size: 0.75em;
  font-family: "PyeongChang-R";
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Selects = styled.ul`
width: 100%;
  margin-left: -14px;
  position: absolute;
  height: 80px;
  overflow: scroll;
  overflow-x: hidden;
  top: 60px;
  display: ${(props) => {
    return props.Show ? "block" : "none";
  }};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Option = styled.li`
  list-style: none;
  width: 100%;
  padding-left: 20px;
  background-color: black;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  /* display: ${(props) => {
    return props.Show ? "block" : "none";
  }}; */
`;

export { SelectBox, Label, Selects, Option };