import React, { useEffect, useRef, useState } from "react";
import {
  HeaderBox,
  HeaderContainer,
  // ImgBox,
  Linked,
  Login,
  Profile,
  ProfileBox,
} from "./style";
// import Logo from "../../images/header/Logo.svg";
import UserProfile from "../../images/header/User.svg";
import { Link } from "react-router-dom";
import { handleClick } from "./components/Login";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginState, PointState } from "../../recoil/login/login";
import Modal from "./components/modal";

const Header = () => {
  const [account, setAccount] = useRecoilState(LoginState);
  const setAmount = useSetRecoilState(PointState);
  const [ModalState, setModalState] = useState(false);
  const modalRef = useRef(null);

  // 모달 밖을 클릭했을 때 모달을 닫는 이벤트 핸들러
  const closeModalOnClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // 모달 바깥을 클릭했을 때만 모달을 닫음
      setModalState(false);
    }
  };
  useEffect(() => {
    // 이벤트 핸들러를 추가
    document.addEventListener("mousedown", closeModalOnClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 핸들러를 제거
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    };
  }, []);
  return (
    <HeaderContainer>
      <HeaderBox>
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <ImgBox src={Logo} alt="Logo-imgsrource"></ImgBox> */}
          <div className="LogoName">Moonlyt</div>
        </Link>
        <Linked
          to="/invest"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Invest
        </Linked>
        <Linked to="/webtoon">Webtoon</Linked>
        {account && account.account !== "" ? (
          <ProfileBox ref={modalRef}>
            <Login onClick={() => setModalState(!ModalState)}>
              <Profile src={UserProfile} alt="UserProfile-img"></Profile>
            </Login>
            {ModalState ? <Modal setModalState={setModalState} /> : null}
          </ProfileBox>
        ) : (
          <Login
            onClick={() =>
              handleClick().then((res) => {
                setAccount(res);
                setAmount(200);
              })
            }
          >
            Login
          </Login>
        )}
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
