import React, { useEffect, useRef } from "react";
import {
  ButtonBox,
  Caution,
  CautionBox,
  ContentAdvise,
  ContentAdviseBox,
  ContentLi,
  ContentUl,
  CotentImageBox,
  ImageBox,
  MainTitle,
  ModalBox,
  ModalBoxs,
  ModalContainer,
  SubTitle,
  WebtoonImgBox,
} from "./style";
import { ContentBoxs, ModalSubTitle, ModalTitle } from "../../../commonstyle";
import { Update, WetoonTitle, Episode } from "../../../../data/Webtoon";
import Select from "../../../../components/select/select";
import Tag from "./tag/tag";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/Button";
import Imagebox from "../../../../components/imagebox/imagebox";
import { useRecoilState } from "recoil";
import { WebtoonUpdate } from "../../../../recoil/profile/profile";
const WebtoonModal = (props) => {
  const { setModal } = props;
  const Data = [WetoonTitle, Episode];
  const [Webtoon, setWebtoon] = useRecoilState(WebtoonUpdate);
  const modalRef = useRef(null);

  const closeModalOnClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModalOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    };
  }, []);

  return (
    <ModalContainer>
      <ModalBoxs ref={modalRef}>
        <ModalBox>
          <ModalTitle $bottom="24px">Webtoon Upload</ModalTitle>
          {Update.map((item, idx) => {
            return idx > 4 ? null : (
              <ContentBoxs key={item.Title}>
                <ModalSubTitle>{item.Title}</ModalSubTitle>
                {item.type && item.type === "select" ? (
                  <Select
                    title={item.Title}
                    data={Data[item.num]}
                    placeholder={item.placeholder}
                    height="60px"
                    Webtoon={Webtoon}
                    setWebtoon={setWebtoon}
                  />
                ) : null}
                {item.Tags ? (
                  <Tag
                    Tags={item.Tags}
                    Webtoon={Webtoon}
                    setWebtoon={setWebtoon}
                  />
                ) : null}
                {item.max ? (
                  <Input
                    title={item.Title}
                    placeholder={item.placeholder}
                    Height={item.height + "px"}
                    max={item.max}
                    Webtoon={Webtoon}
                    setWebtoon={setWebtoon}
                  />
                ) : null}
                {item.advise ? (
                  <ContentAdviseBox>
                    {item.advise.map((content, idx) => {
                      return <ContentAdvise key={idx}>{content}</ContentAdvise>;
                    })}
                  </ContentAdviseBox>
                ) : null}
                {item.Tags ? (
                  <ButtonBox>
                    {Webtoon.Category &&
                      Webtoon.Category.map((data, idx) => {
                        return <Button text={data} type="Category" key={idx} />;
                      })}
                  </ButtonBox>
                ) : null}
              </ContentBoxs>
            );
          })}
          <CotentImageBox>
            <ImageBox>
              {Update.map((item, idx) => {
                return idx > 4 && idx < 7 ? (
                  <>
                    <ModalSubTitle>{item.Title}</ModalSubTitle>
                    {idx === 5 && Webtoon.Thumbnail ? (
                      <img
                        src={Webtoon.Thumbnail}
                        alt="ThumbnailImage"
                        style={{ width: 300, height: 300, marginBottom: 33 }}
                      />
                    ) : idx === 6 && Webtoon.Webtoon ? (
                      <WebtoonImgBox>
                        {Webtoon.Webtoon.map((data, idx) => {
                          return (
                            <img
                              src={data}
                              alt="webtoonImgsrc"
                              key={idx}
                              style={{ width: 60, height: 300 }}
                            />
                          );
                        })}
                        {Webtoon.Webtoon.length === 5 ? null : (
                          <Imagebox
                            width={
                              Webtoon.Webtoon.length > 0
                                ? 300 - 60 * Webtoon.Webtoon.length + "px"
                                : "300px"
                            }
                            height="300px"
                            Iwidth="41px"
                            Iheight="41px"
                            bottom={idx === 5 ? "33px" : "0px"}
                            type={idx === 5 ? "Thumbnail" : "Webtoon"}
                          />
                        )}
                      </WebtoonImgBox>
                    ) : (
                      <Imagebox
                        width="300px"
                        height="300px"
                        Iwidth="41px"
                        Iheight="41px"
                        bottom={idx === 5 ? "33px" : "0px"}
                        type={idx === 5 ? "Thumbnail" : "Webtoon"}
                      />
                    )}
                  </>
                ) : null;
              })}
            </ImageBox>
            <CautionBox>
              <ModalSubTitle>{Update[7].Title}</ModalSubTitle>
              <Caution>
                {Update[7].Content.map((data, idx) => {
                  return (
                    <div key={idx}>
                      <MainTitle
                        style={
                          data.Title === "Bad post policy"
                            ? { marginTop: "7px" }
                            : null
                        }
                      >
                        {data.Title}
                      </MainTitle>
                      {data.Sub.map((item, num) => {
                        return (
                          <ContentUl key={num}>
                            <SubTitle>{item.title}</SubTitle>
                            {item.content.map((content, index) => {
                              return (
                                <ContentLi key={index}>
                                  {` · ${content}`}
                                </ContentLi>
                              );
                            })}
                          </ContentUl>
                        );
                      })}
                    </div>
                  );
                })}
              </Caution>
            </CautionBox>
          </CotentImageBox>
        </ModalBox>
      </ModalBoxs>
    </ModalContainer>
  );
};

export default WebtoonModal;
