import React from "react";
import { Box, BoxTitle, Boxs, Container, HotBox, More } from "../style";
import { action, romance } from "../../../data/data";
import ImgButtons from "../../../components/imageBtn/button";

const Foot = () => {
  return (
    <Container>
      <Boxs>
        <Box>
          <HotBox>BEST</HotBox>
          <BoxTitle>Action Best</BoxTitle>
        </Box>
        <Box>
          <More>more</More>
        </Box>
      </Boxs>
      {action &&
        action.map((item, idx) => {
          return (
            <ImgButtons
              key={idx}
              src={item}
              text={`slide${idx}`}
              right="63px"
              last={action.length - 1 === idx ? idx : ""}
            ></ImgButtons>
          );
        })}
      <Boxs>
        <Box>
          <HotBox>BEST</HotBox>
          <BoxTitle>Romance Best</BoxTitle>
        </Box>
        <Box>
          <More>more</More>
        </Box>
      </Boxs>
      {romance &&
        romance.map((item, idx) => {
          return (
            <ImgButtons
              key={idx}
              src={item}
              text={`slide${idx}`}
              right="63px"
              last={romance.length - 1 === idx ? idx : ""}
              bottom="193px"
            ></ImgButtons>
          );
        })}
    </Container>
  );
};

export default Foot;
