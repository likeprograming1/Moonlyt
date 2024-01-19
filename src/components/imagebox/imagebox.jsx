import React, { useEffect, useRef, useState } from "react";
import { BoxContainer, BoxImage } from "./style";
import Plus from "../../images/button/plus.png";
import { WebtoonUpdate } from "../../recoil/profile/profile";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

const Imagebox = (props) => {
  const { width, height, Iwidth, Iheight, bottom, type } = props;
  const [Webtoon, setWebtoon] = useRecoilState(WebtoonUpdate);
  const [Webtoons, setWebtoons] = useState([]);
  const { pathname } = useLocation();
  const Click = useRef();

  useEffect(() => {
    setWebtoon({
      ...Webtoon,
      Webtoon: Webtoons,
    });
  }, [Webtoons]);

  const handleClick = () => {
    Click.current.click();
  };
  const handleChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        const data = base64String;
        if (pathname === "/myprofile/upload") {
          if (type === "Thumbnail") {
            setWebtoon({
              ...Webtoon,
              Thumbnail: data,
            });
          } else if (type === "Webtoon") {
            setWebtoons([...Webtoons, data]);
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <BoxContainer $width={width} $height={height} $bottom={bottom}>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        style={{ display: "none" }}
        ref={Click}
        onChange={handleChange}
      />
      <BoxImage
        src={Plus}
        alt="ImgBox"
        onClick={handleClick}
        $width={Iwidth}
        $height={Iheight}
      />
    </BoxContainer>
  );
};

export default Imagebox;
