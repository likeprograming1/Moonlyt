import React, { useState } from "react";
import Left from "../../images/main/webtoon/Left.svg";
import Right from "../../images/main/webtoon/Right.svg";
import {
  WebtoonContainer,
  WebtoonBox,
  WebtoonImg,
  WebtoonSpan,
  LeftArrow,
  RightArrow,
  ArrowImg,
} from "./style";

const Webtoon = ({ data }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(4);

  const handleDecrease = () => {
    if (max >= data.length - 1 || (max < data.length - 1 && min > 0)) {
      setMin(min - 5);
      setMax(max - 5);
    } else {
      setMax(data.length - 1);
      setMin(data.length - 5);
    }
  };

  const handleIncrement = () => {
    if (max < data.length - 1) {
      setMax(max + 5);
      setMin(min + 5);
    } else if (max >= data.length - 1) {
      setMax(4);
      setMin(0);
    }
  };

  return (
    <WebtoonContainer>
      <LeftArrow>
        <button className="Abtn" onClick={handleDecrease}>
          <ArrowImg src={Left} alt="Left-img"></ArrowImg>
        </button>
      </LeftArrow>
      <RightArrow>
        <button className="Abtn" onClick={handleIncrement} active="right">
          <ArrowImg src={Right} alt="Right-img"></ArrowImg>
        </button>
      </RightArrow>
      {data &&
        data.map((item, idx) => {
          return idx >= min && idx <= max ? (
            <WebtoonBox key={idx}>
              <WebtoonImg src={item.src} alt={item.name}></WebtoonImg>
              <WebtoonSpan>{item.name}</WebtoonSpan>
            </WebtoonBox>
          ) : (
            <></>
          );
        })}
    </WebtoonContainer>
  );
};

export default Webtoon;
