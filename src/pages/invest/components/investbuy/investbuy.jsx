import React, { useEffect, useRef } from "react";
import {
  Container,
  ContentContainer,
  ProductTitle,
  ModalBox,
  ModalContainer,
  COntentBox,
  ContentTitle,
  ContentHot,
  ContentTitleBox,
  Content,
  Bar,
  NftBtns,
} from "./style";
import { webtoonsImages } from "../../../../data/data";
import Slide from "../../../../hooks/investslide/slide";
import Hart from "../../../../images/invest/modal/hart.svg";
import Library from "../../../../images/invest/modal/library.svg";
import { useRecoilState } from "recoil";
import { ProfileState } from "../../../../recoil/profile/profile";

const InvestBuy = ({ Id, setModal, data }) => {
  const [UserState, setUserState] = useRecoilState(ProfileState);
  const setdata = data;
  const Data = webtoonsImages[Id];
  const Page = useRef();
  const handleClick = (event) => {
    if (Page.current && !Page.current.contains(event.target)) {
      setModal(false);
    }
  };

  const handleOnClick = (data) => {
    console.log(UserState);
    const Check =
      UserState.nft &&
      UserState.nft.findIndex((item) => {
        return item.id === data.id;
      });

    if (Check === -1) {
      console.log(data);
      setUserState({
        ...UserState,
        nft: [...UserState.nft, data[Id]],
      });
    } else {
      alert("이미 구매하신 웹툰입니다.");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onmousedown]);

  return (
    <Container>
      <ModalBox>
        <ModalContainer
          ref={Page}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <Slide Data={Data} />
          <ContentContainer>
            <ProductTitle>NFT Purchase</ProductTitle>
            <COntentBox>
              <ContentTitleBox>
                <ContentTitle>{Data.title}</ContentTitle>
                {Data.hot ? <ContentHot>Hot</ContentHot> : null}
              </ContentTitleBox>
              <Content>{Data.price}$</Content>
              <Bar></Bar>
              <ContentTitle>Summary</ContentTitle>
              <Content Width="324px">{Data.content}</Content>
              <Bar />
              <ContentTitle>Benefits</ContentTitle>
              {Data &&
                Data.nft.benefits.map((item, idx) => {
                  return (
                    <Content Height={idx === 0 ? "28px" : "16px"} key={idx}>
                      {item}
                    </Content>
                  );
                })}
              <Bar />
              <ContentTitleBox just="space-between">
                <ContentTitle>Limited Quantity</ContentTitle>
                <Content>{Data.nft.quantity}</Content>
              </ContentTitleBox>
              <Bar />
              <ContentTitleBox just="space-between">
                <NftBtns>
                  <img src={Hart} alt="hartImg"></img>
                </NftBtns>
                <NftBtns>
                  <img src={Library} alt="LibraryImg"></img>
                </NftBtns>
                <NftBtns
                  width="188px"
                  onClick={() => {
                    handleOnClick(setdata);
                    setModal(false);
                  }}
                >
                  NFT Purchase
                </NftBtns>
              </ContentTitleBox>
            </COntentBox>
          </ContentContainer>
        </ModalContainer>
      </ModalBox>
    </Container>
  );
};

export default InvestBuy;
