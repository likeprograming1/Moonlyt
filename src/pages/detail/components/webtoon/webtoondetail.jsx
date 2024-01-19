import React from "react";
import {
  WebtoonSearch,
  BackImg,
  BackBlur,
  FrontImg,
  Title,
  AuthorName,
  CategoryButton,
  ButtonBox,
  Content,
  Bts,
  Pool,
} from "./style";

const Webtoondetail = (props) => {
  const { Data, Btn, setModal, Modal } = props;
  const handleClick = (e) => {
    const { name } = e.target;
    console.log(name);

    if (name === "Create NFT") {
      setModal((prev) => ({
        ...prev,
        NFT: !Modal.NFT,
      }));
    } else if (name === "Disscussion") {
      setModal((prev) => ({
        ...prev,
        Disscussion: !Modal.Disscussion,
      }));
    } else if (name === "Voting") {
      setModal((prev) => ({
        ...prev,
        Voting: !Modal.Voting,
      }));
    }
  };

  return (
    <WebtoonSearch>
      <BackBlur>
        <BackImg src={Data.src} alt="webtoon_imgsrc" />
        <FrontImg src={Data.src} alt="webtoon_imgsrc" />
      </BackBlur>
      <Title>{Data.title}</Title>
      <AuthorName>{Data.author}</AuthorName>
      <ButtonBox>
        {Data &&
          Data.subCategory?.map((item, idx) => {
            return <CategoryButton key={idx}>{item}</CategoryButton>;
          })}
      </ButtonBox>
      <Content>{Data.content}</Content>
      <Pool>Deposited in the pool : 1500 mly</Pool>
      <Pool style={{ marginBottom: "15px" }}>
        Distributed to {Data.author} : 1500 mly
      </Pool>
      {Btn &&
        Btn?.map((item, idx) => {
          return (
            <Bts
              key={idx}
              name={item}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {item}
            </Bts>
          );
        })}
    </WebtoonSearch>
  );
};

export default Webtoondetail;
