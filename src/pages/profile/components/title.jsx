import React from "react";
import { Button, ContainerTitle, ContentBox } from "./inform/style";
import { names, namesTitle, profileMargin } from "../../../data/data";
import Inform from "./inform/information";
import Detail from "./detail/detail";
import MyWebtoon from "./webtoon/webtoon";
import Nft from "./nft/nft";

const Content = (props) => {
  const { param, setModal, Modal } = props;
  const index = namesTitle.findIndex((item) => item === param.id)
    ? namesTitle.findIndex((item) => item === param.id)
    : 0;
  const address = [<Inform />, <MyWebtoon />, <Nft />, <Detail />];

  return (
    <ContentBox>
      <ContainerTitle $bottom={profileMargin[index]}>
        {names[index]}
        {index === 3 ? (
          <Button
            onClick={() => {
              setModal(!Modal);
            }}
          >
            Upload
          </Button>
        ) : null}
      </ContainerTitle>
      {address[index]}
    </ContentBox>
  );
};

export default Content;
