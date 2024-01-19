import React from "react";
import {
  BuyButton,
  ContentAuthor,
  ContentBox,
  ContentTitle,
  ContentView,
  ContentViews,
  ContentVote,
  ContentVoteBox,
  ContentVoteTitle,
  Image,
  InvestBoxs,
  TitleBox,
} from "./style";
import views from "../../images/webtoons/view.svg";

const InvestComponent = ({ data, buy, setModal, setId }) => {
  return (
    data &&
    data.map((item, idx) => {
      return (
        <InvestBoxs key={idx}>
          <Image src={item.src} alt={`image${idx}`} />
          <ContentBox>
            <TitleBox>
              <ContentTitle>{item.title}</ContentTitle>
              {buy ? (
                <BuyButton
                  onClick={() => {
                    setId(idx);
                    setModal(true);
                  }}
                >
                  NFT Purchase
                </BuyButton>
              ) : null}
            </TitleBox>
            <ContentAuthor>Author / {item.author}</ContentAuthor>
            <ContentAuthor>NFT Price : {item.price}$</ContentAuthor>
            <ContentVoteTitle>Investment Progress</ContentVoteTitle>
            <ContentVoteBox>
              <ContentVote width={item.human}></ContentVote>
            </ContentVoteBox>
            <ContentViews>
              <img src={views} alt="view_image" className="image"></img>
              <ContentView>{item.views}</ContentView>
            </ContentViews>
          </ContentBox>
        </InvestBoxs>
      );
    })
  );
};

export default InvestComponent;
