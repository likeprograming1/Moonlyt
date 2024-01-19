import React, { useState } from "react";
import {
  Button,
  ButtonBox,
  ContentBox,
  ContentDay,
  ContentHead,
  ContentPrice,
  ImageBox,
  List,
  ListBox,
} from "./style";
import { webtoonsDetail } from "../../../../data/data";
import cookie from "../../../../images/detail/cookie.svg";
import { useRecoilValue } from "recoil";
import { ProfileState } from "../../../../recoil/profile/profile";

const Turn = (props) => {
  const [BtnState, setBtnState] = useState(0);
  const { Data, id, setBuyModal, setWebtoonBuy } = props;
  const Profile = useRecoilValue(ProfileState);

  return (
    <ListBox>
      <ButtonBox>
        <Button
          className={BtnState === 0 ? "active" : "non-active"}
          onClick={() => {
            setBtnState(0);
          }}
        >
          Purchase Webtoon
        </Button>
        <Button
          className={BtnState === 1 ? "active" : "non-active"}
          onClick={() => {
            setBtnState(1);
          }}
        >
          Newest
        </Button>
      </ButtonBox>
      {webtoonsDetail[id].data.map((data, idx) => {
        return (
          <List key={idx}>
            <button
              onClick={() => {
                if (data.price !== "0") {
                  const updatedWebtoon = [...Profile.webtoon, Data];
                  setWebtoonBuy(updatedWebtoon);
                  setBuyModal(true);
                }
              }}
            >
              <ImageBox src={data.src ? data.src : Data.src} alt="ListImage" />
            </button>
            <ContentBox>
              <ContentHead>
                {data.title} [{idx + 1}]
              </ContentHead>
              <ContentDay>{data.day}</ContentDay>
              <ContentPrice>
                {data.price === "0" ? "Free" : "Get Free"}
                {data.price === "0" ? null : (
                  <img src={cookie} alt="cookie_logo" className="cookielogo" />
                )}
              </ContentPrice>
            </ContentBox>
          </List>
        );
      })}
    </ListBox>
  );
};

export default Turn;
