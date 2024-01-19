import React, { useState } from "react";
import { InputBox, InputC, Span } from "./style";

const Input = (props) => {
  const { title, placeholder, Height, max, Webtoon, setWebtoon } = props;
  const [Title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (title === "Episode Title") {
      setWebtoon({
        ...Webtoon,
        EpisodeTitle: e.target.value,
      });
    } else if (title === "Brief Plot") {
      setWebtoon({
        ...Webtoon,
        Brief: e.target.value,
      });
    }
  };

  return (
    <InputBox>
      <InputC
        placeholder={placeholder}
        Ht={Height}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Span>
        {Title.length}/ {max}
      </Span>
    </InputBox>
  );
};

export default Input;
