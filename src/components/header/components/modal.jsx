import React from "react";
import {
  ModalBox,
  ModalBoxs,
  PointBox,
  Span,
  ModalSpan,
  ModalBtn,
  ModalOne,
} from "./modalstyle";
import { Profile } from "../style";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Author, LoginState, PointState } from "../../../recoil/login/login";
import Point from "../../../images/header/modal/Point.svg";
import UserProfile from "../../../images/header/User.svg";
import { useNavigate } from "react-router-dom";
import { disconnect } from "starknetkit";
import { disconnectWallet } from "./Login";

const Modal = ({ setModalState, setConnection, setProvider, setAddress }) => {
  const setModal = setModalState;
  const setAccount = useSetRecoilState(LoginState);
  const Amount = useRecoilValue(PointState);
  const navigate = useNavigate();
  const [Mode, Aurhor] = useRecoilState(Author);
  return (
    <ModalBoxs>
      <PointBox>
        <ModalBtn
          state={Mode}
          onClick={() => {
            Aurhor(!Mode);
          }}
        >
          <ModalOne state={Mode} />
          <span className="title">{Mode ? "Author" : "Normal"}</span>
        </ModalBtn>
        <Span>
          {Amount}
          <img src={Point} alt="cookie_img"></img>
        </Span>
      </PointBox>
      <ModalBox height="85px">
        <Profile $bottom="10px" src={UserProfile} alt="user_profile"></Profile>
        <ModalSpan
          onClick={() => {
            navigate("/myprofile/profile");
            setModal(false);
          }}
        >
          My Profile
        </ModalSpan>
      </ModalBox>
      <ModalBox>
        <ModalSpan
          onClick={() => {
            setAccount("");
            navigate("/");
            setModal(false);
            disconnectWallet(
              disconnect,
              setConnection,
              setProvider,
              setAddress
            );
          }}
        >
          LogOut
        </ModalSpan>
      </ModalBox>
    </ModalBoxs>
  );
};

export default Modal;
