import React from "react";
import { Container, ContainerBox, InvestBox, NavBox } from "./style";
import Category from "../../components/subcategory/category";
import Navbar from "../../components/Navbar/navbar";
import { webtoonsImages } from "../../data/data";
import InvestImage from "../../components/webtoonImage/webtoonImage";

const Webtoon = () => {
  const subCate_names = ["Newest", "popularity", "Viewed"];
  const Cate_names = [
    "Rofan",
    "Action",
    "School",
    "Life Story",
    "Wuxia",
    "Mistery",
    "Hero",
    "Adult",
  ];

  return (
    <Container>
      <ContainerBox>
        <Category names={subCate_names} right="28px"></Category>
        <NavBox>
          <Navbar data={Cate_names} />
        </NavBox>
        <InvestBox>
          <InvestImage data={webtoonsImages} />
        </InvestBox>
      </ContainerBox>
    </Container>
  );
};

export default Webtoon;
