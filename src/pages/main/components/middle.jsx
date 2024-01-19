import React from "react";
import { Container, MiddleContainer, Boxs, BoxTitle, More } from "../style";
import ImgButtons from "../../../components/imageBtn/button";
import { Friday } from "../../../data/data";

const Middle = () => {
  return (
    <MiddleContainer>
      <Container>
        <Boxs $top="52px" $bottom="43px">
          <BoxTitle color="white">Fridaty Webtoon</BoxTitle>
          <More color="white">more</More>
        </Boxs>
        {Friday &&
          Friday.map((item, idx) => {
            return (
              <ImgButtons
                key={idx}
                src={item}
                alt={`slide${idx}`}
                right="65px"
                bottom="57px"
              ></ImgButtons>
            );
          })}
      </Container>
    </MiddleContainer>
  );
};

export default Middle;
