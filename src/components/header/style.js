import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import "../../styles/font/font.css";

const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const HeaderBox = styled.div`
  max-width: 1267px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .LogoName {
    color: #333;
    font-family: Inter;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .active {
    color: var(--HeadActive);
  }
  @media screen and (max-width: 1600px) {
    max-width: 80vw;
  }
`;

const ImgBox = styled.img`
  width: 220px;
  height: 45px;
  z-index: 9999;
  cursor: pointer;
  @media screen and (max-width: 1600px) {
    width: 150px;
  }
`;

const Linked = styled(NavLink)`
  font-family: "PyeongChang-Bold";
  text-decoration: none;
  margin-left: 100px;
  color: var(--HeadColor);
  font-size: 1.0625em;
`;

const Login = styled.button`
  font-family: "PyeongChang-Bold";
  margin-left: 100px;
  border: none;
  background: none;
  color: var(--HeadColor);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.0625em;
  z-index: 999;
`;

const ProfileBox = styled.div`
  position: relative;
`;

const Profile = styled.img`
  margin-bottom: ${({ $bottom }) => {
    return $bottom;
  }};
`;
export {
  HeaderContainer,
  HeaderBox,
  ImgBox,
  Linked,
  Login,
  ProfileBox,
  Profile,
};
