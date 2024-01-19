import { styled } from "styled-components";
import "../../styles/font/font.css";

const NavbarContainer = styled.div`
  max-width: 1267px;
  display: flex;
  .active {
    color: white;
    background-color: var(--Color);
  }
`;

const NavbarBoxs = styled.button`
  font-family: "PyeongChang-Bold";
  border: 2px solid rgba(228, 60, 34, 0.25);
  border-right: 0px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.data === 6 ? "16.5%" : 100 / props.data + "%")};
  height: 100px;
  font-size: 1em;
  cursor: pointer;
  &:last-child {
    border-right: 2px solid rgba(228, 60, 34, 0.25);
  }
`;

const NavbarAdult = styled.div`
  width: 40px;
  height: 38px;
  background-color: #ff2200;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 7px;
`;

export { NavbarContainer, NavbarBoxs, NavbarAdult };
