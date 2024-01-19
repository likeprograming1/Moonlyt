import React, { useState } from "react";
import { Boxs } from "../createNFT/style";
import { Container } from "../voting/style";
import EpisodeImg from "../../../../images/EpisodeButton.png";
import ReportImg from "../../../../images/Report.png";
import LikeImg from "../../../../images/Like.png";
import ReCommentImg from "../../../../images/ReComment.png";
import { CommentBox, CommentView } from "./style";

const Disscussion = ({ setModal, Modal, Data }) => {
  const [Comment, setComment] = useState([
    {
      name: "Reader 1",
      comment: "I think that character design would be cute",
      like: false,
      recomment: false,
    },
    {
      name: "Reader 2",
      comment: "I think that character design would be cute",
      like: false,
      recomment: false,
    },
    {
      name: "Reader 3",
      comment: "I think that character design would be cute",
      like: false,
      recomment: false,
    },
  ]);
  const [Text, setText] = useState("");

  const handleClick = () => {
    if (Text.length !== 0) {
      setComment((prev) => [
        ...prev,
        {
          name: `Reader ${Comment.length + 1}`,
          comment: Text,
          like: false,
          recomment: false,
        },
      ]);
    } else {
      alert("글을 입력해주세요!");
    }
  };

  return (
    <Boxs>
      <Container style={{ maxHeight: "1282px", overflowY: "auto" }}>
        <div
          className="CloseBtn"
          onClick={() => {
            setModal((prev) => ({
              ...prev,
              Disscussion: !Modal.Disscussion,
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
        <CommentBox>
          <input
            type="text"
            className="CommentInput"
            placeholder="write your opinion"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <div className="CommBtn">
            <button onClick={handleClick}>registration</button>
          </div>
          <div className="Title">Opinion</div>
          {Comment?.map((data, idx) => {
            return (
              <CommentView>
                <div className="head">
                  <div className="UserName">{data.name}</div>
                  <div className="ReportBox">
                    <img src={ReportImg} alt="ReportImg" />
                    Report
                  </div>
                </div>
                <div className="Contents">{data.comment}</div>
                <div className="BtnsBox">
                  <div className="LikeBtn Box">
                    <img src={LikeImg} alt="LikeBtn"></img>
                    like
                  </div>
                  <div className="ReComment Box">
                    <img src={ReCommentImg} alt="ReCommentBtn"></img>
                    comment
                  </div>
                </div>
              </CommentView>
            );
          })}
        </CommentBox>
      </Container>
    </Boxs>
  );
};

export default Disscussion;
