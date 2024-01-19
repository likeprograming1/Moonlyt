import React, { useState } from "react";
import { Boxs } from "../createNFT/style";
import { AgreePercent, Container } from "./style";
import EpisodeImg from "../../../../images/EpisodeButton.png";

const Voting = ({ setModal, Modal, Data }) => {
  const [Default, setDefault] = useState(2);
  const [Check, setCheck] = useState(false);
  const Max = 10;
  const Percent = Math.floor((Default / Max) * 100);

  const Agree = () => {
    setDefault(Default + 1);
    setCheck(!Check);
  };
  const DisAgree = () => {
    setDefault(Default - 1);
    setCheck(!Check);
  };

  return (
    <Boxs>
      <Container>
        <div
          className="CloseBtn"
          onClick={() => {
            setModal((prev) => ({
              ...prev,
              Voting: !Modal.Voting,
            }));
          }}
        >
          X
        </div>
        <div className="Head">
          <div className="HeadTitle Voting">DAO Voting</div>
          <div className="HeadTitle Episode">
            Episode 18 : Episode Title <img src={EpisodeImg} alt="Arrow"></img>
          </div>
        </div>
        <div className="Title">What do you like about character design?</div>
        <div className="Author">Webtoon | Title | Author</div>
        <div className="Day">2023 . 08 . 27</div>
        <div className="ImgBox">
          <img src={Data.src} alt="ContentImg"></img>
        </div>
        <div className="SubTitle">Month’s work status</div>
        <AgreePercent $Percent={Percent}>
          <div className="Bar"></div>
        </AgreePercent>
        {Check ? (
          <div className="AgreeAfter">Participation completed</div>
        ) : (
          <div className="ButtonBox">
            <div className="Agree Btn" onClick={Agree}>
              Agree
            </div>
            <div className="Btn" onClick={DisAgree}>
              DisAgree
            </div>
          </div>
        )}
      </Container>
    </Boxs>
  );
};

export default Voting;
