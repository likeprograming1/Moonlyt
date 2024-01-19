import React, { useState } from "react";
import { Check, CheckBox, CheckImage, CheckLabel, TagBox } from "./style";
import CheckImg from "../../../../../images/select/Check.png";

const Tag = (props) => {
  const { Tags, Webtoon, setWebtoon } = props;
  const CheckSign = useState(new Array(Tags.length).fill(false));

  const handleChange = (e, idx) => {
    const FindCate = Webtoon.Category.findIndex((data) => {
      return e.target.id === data;
    });
    console.log(CheckSign);
    if (Webtoon.Category.length < 2 && FindCate === -1) {
      CheckSign[idx] = true;
      setWebtoon({
        ...Webtoon,
        Category: [...Webtoon.Category, e.target.id],
      });
    } else {
      alert("카테고리는 2개까지 입니다.");
    }
  };
  return (
    <TagBox>
      {Tags.map((item, idx) => {
        return (
          <CheckBox key={idx}>
            {Webtoon.Category.findIndex((data) => {
              return data === item;
            }) !== -1 ? (
              <CheckImage src={CheckImg} alt="CheckImg" />
            ) : (
              <Check
                className="checked"
                type="checkbox"
                onClick={(e) => handleChange(e, idx)}
                id={item}
                checked={Webtoon.Category.length < 2 ? null : false}
              />
            )}

            <CheckLabel htmlFor={item}>{item}</CheckLabel>
          </CheckBox>
        );
      })}
    </TagBox>
  );
};

export default Tag;
