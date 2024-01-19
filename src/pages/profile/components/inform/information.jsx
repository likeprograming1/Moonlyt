import React, { useRef } from "react";
import { Contents } from "../../style";
import UserProfile from "../../../../images/header/User.svg";
import {
  AccountBox,
  AccountButton,
  AccountCommonBox,
  AccountCopyBtn,
  AccountProfile,
  AddressContent,
  AddressTitle,
  ImageBox,
  LogOutBtn,
} from "./style";
import { useRecoilState } from "recoil";
import { LoginState } from "../../../../recoil/login/login";
import { useNavigate } from "react-router-dom";

const Inform = () => {
  const [address, setAddress] = useRecoilState(LoginState);
  const click = useRef();
  const navigate = useNavigate();

  return (
    <Contents>
      <AccountBox>
        <ImageBox>
          <AccountProfile
            src={UserProfile}
            alt="Profile_Default_image"
          ></AccountProfile>
          <input type="file" style={{ display: "none" }} ref={click} />
          <AccountButton
            onClick={() => {
              click.current.click();
            }}
          >
            +
          </AccountButton>
        </ImageBox>
      </AccountBox>
      <AccountCommonBox $bottom="91px">
        <AddressTitle>Address</AddressTitle>
        <div className="box">
          <AddressContent>{address && address}</AddressContent>
          <AccountCopyBtn
            onClick={() => {
              navigator.clipboard.writeText(address);
              alert("복사되었습니다!");
            }}
          >
            Copy
          </AccountCopyBtn>
        </div>
      </AccountCommonBox>
      <AccountCommonBox $bottom="138px">
        <AddressTitle>Account Number</AddressTitle>
        <div className="box">
          <AddressContent>19852925013 - 11y29x5932</AddressContent>
        </div>
      </AccountCommonBox>
      <LogOutBtn
        onClick={() => {
          setAddress("");
          navigate("/");
        }}
      >
        LogOut
      </LogOutBtn>
    </Contents>
  );
};

export default Inform;
