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
import { connectWallet, handleClick } from "./components/Login";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginState, PointState } from "../../recoil/login/login";
import Modal from "./components/modal";
import { connect } from "starknetkit";

const Header = () => {
  const [account, setAccount] = useRecoilState(LoginState);
  const setAmount = useSetRecoilState(PointState);
  const [ModalState, setModalState] = useState(false);
  const [Connection, setConnection] = useState();
  const [Provider, setProvider] = useState();
  const [Address, setAddress] = useState();
  const modalRef = useRef(null);

  console.log(Connection);
  console.log(Provider);
  console.log(Address);
  useEffect(() => {
    setAccount(Provider?.address);
    setAmount(200);
  }, [Provider, setAccount, setAmount]);
  // 모달 밖을 클릭했을 때 모달을 닫는 이벤트 핸들러
  const closeModalOnClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // 모달 바깥을 클릭했을 때만 모달을 닫음
      setModalState(false);
    }
  };

  useEffect(() => {
    const connectToStarknet = async () => {
      const connection = await connect({
        modalMode: "neverAsk",
        webWalletUrl: "https://web.argent.xyz",
      });

      if (connection && connection.isConnected) {
        setConnection(connection);

        setProvider(connection.account);

        setAddress(connection.selectedAddress);
      }
    };

    connectToStarknet();
  }, []);

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
            {ModalState ? (
              <Modal
                setModalState={setModalState}
                setConnection={setConnection}
                setProvider={setProvider}
                setAddress={setAddress}
              />
            ) : null}
          </ProfileBox>
        ) : (
          <Login
            onClick={() =>
              handleClick().then((res) => {
                setAccount(res);
                setAmount(200);
              })
            }
            // onClick={() =>
            //   connectWallet(connect, setConnection, setProvider, setAddress)
            // }
          >
            Login
          </Login>
        )}
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
