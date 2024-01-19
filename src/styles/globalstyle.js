import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    border: none;
    background: none;
  }
  .main_box {
    overflow: hidden;
  }
  :root {
    --HeadColor : #292929;
    --HeadActive : #E43C22;
    --FooterSpan : #838383;
    --Color : #E43C22;
    --SubTitle : #6C6C6C;
    --Inputplace : #B5B5B5;
    --Boxborder : #C3C3C3;
  }
`;

export { Global };
