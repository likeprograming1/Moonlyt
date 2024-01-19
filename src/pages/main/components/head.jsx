import React from "react";
import { Box, BoxTitle, Container, HotBox, Nav } from "../style";
import { MainNav, Rank, WebtoonData } from "../../../data/data";
import Navbar from "../../../components/Navbar/navbar";
import Webtoon from "../../../components/webtoon/webtoon";
import ImgButtons from "../../../components/imageBtn/button";

const Head = () => {
  return (
    <Container>
      <Nav>
        <Navbar data={MainNav} />
      </Nav>
      <Webtoon data={WebtoonData} />
      <Box>
        <HotBox>HOT</HotBox>
        <BoxTitle>Today Ranking</BoxTitle>
      </Box>
      {Rank &&
        Rank.map((item, idx) => {
          return (
            <ImgButtons src={item} alt={`slide${idx}`} key={idx}></ImgButtons>
          );
        })}
    </Container>
  );
};

export default Head;
