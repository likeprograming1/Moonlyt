import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { DetailState } from "../../recoil/webtoon/webtoon";
import { Container, Boxs } from "./style";
import Webtoondetail from "./components/webtoon/webtoondetail";
import Turn from "./components/turn/productturn";
import { useParams } from "react-router-dom";
import CreateNFT from "./components/createNFT/createNFT";
import Voting from "./components/voting/voting";
import Disscussion from "./components/disscussion/disscussion";

const Detail = () => {
  const { id } = useParams();
  const Data = useRecoilValue(DetailState);
  const Btn = ["Voting", "Disscussion", "Create NFT"];
  const [Modal, setModal] = useState({
    NFT: false,
    Voting: false,
    Disscussion: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {Modal.NFT ? <CreateNFT setModal={setModal} Modal={Modal} /> : null}
      {Modal.Voting ? (
        <Voting setModal={setModal} Modal={Modal} Data={Data} />
      ) : null}
      {Modal.Disscussion ? (
        <Disscussion setModal={setModal} Modal={Modal} Data={Data} />
      ) : null}
      <Container>
        <Boxs>
          <Webtoondetail
            Data={Data}
            Btn={Btn}
            setModal={setModal}
            Modal={Modal}
          />
          <Turn Data={Data} id={id} />
        </Boxs>
      </Container>
    </>
  );
};

export default Detail;
