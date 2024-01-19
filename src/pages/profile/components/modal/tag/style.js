import { styled } from "styled-components";

const TagBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Check = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 9px;
  appearance: none;
  border: 1px solid #e0e0e0;
`;

const CheckImage = styled.img`
  border: 1px solid #e0e0e0;
  margin-right: 9px;
`;

const CheckLabel = styled.label`
  font-family: "PyeongChang-R";
  font-size: "0.875em";
  color: #313131;
`; 
export { TagBox, CheckBox, Check, CheckLabel, CheckImage };