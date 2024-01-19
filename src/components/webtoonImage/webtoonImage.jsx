import React from "react";
import {
  Author,
  Box,
  Cate,
  Gory,
  Image,
  ImgBox,
  Title,
  ViewCate,
  ButtonBox,
} from "./style";
import View from "../../images/webtoons/view.svg";
import { useRecoilState } from "recoil";
// import { ProfileState } from "../../recoil/profile/profile";
import { useNavigate } from "react-router-dom";
import { DetailState } from "../../recoil/webtoon/webtoon";

const InvestImage = ({ data, bottom }) => {
  const navigate = useNavigate();
  const [Data, setData] = useRecoilState(DetailState);
  console.log(Data);
  // const [Data, setData] = useRecoilState(ProfileState);

  // const handleClick = (webtoonData) => {
  //   const Check =
  //     Data.webtoon &&
  //     Data.webtoon.findIndex((item) => {
  //       return item.id === webtoonData.id;
  //     });

  //   if (Check === -1) {
  //     setData({
  //       ...Data,
  //       webtoon: [...Data.webtoon, webtoonData],
  //     });
  //   } else {
  //     alert("이미 구매하신 웹툰입니다.");
  //   }
  // };

  return (
    <ImgBox $bottom={bottom}>
      {data &&
        data.map((image, idx) => {
          return (
            <Box key={idx}>
              <ButtonBox
                onClick={() => {
                  navigate(`/detail/${idx}`);
                  setData(image);
                  // handleClick(image);
                }}
              >
                <Image src={image.src} alt={`invest_image${idx}`} />
              </ButtonBox>
              <Title>{image.title}</Title>
              <Author>Author / {image.author}</Author>
              <ViewCate>
                <Cate>
                  {image.subCategory &&
                    image.subCategory.map((cate, idx) => {
                      return <Gory key={idx}>{cate}</Gory>;
                    })}
                </Cate>
                <Cate>
                  <img src={View} alt="view_image" className="view"></img>
                  <span>{image.views}</span>
                </Cate>
              </ViewCate>
            </Box>
          );
        })}
    </ImgBox>
  );
};

export default InvestImage;
