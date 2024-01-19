import React, { useState } from "react";
import { Label, Option, SelectBox, Selects } from "./style";
import SelectImg from "../../images/select/Select.png";

const Select = (props) => {
  const { Webtoon, setWebtoon, title, placeholder, data, height } = props;
  const [Show, setShow] = useState(false);

  const handleChange = (e) => {
    if (title === "Weboon Title") {
      setWebtoon({
        ...Webtoon,
        Title: e.target.innerText,
      });
    } else if (title === "Webtoon Episode") {
      setWebtoon({
        ...Webtoon,
        Episode: e.target.innerText,
      });
    }
  };

  return (
    <SelectBox
      onClick={() => {
        setShow(!Show);
      }}
      style={{ height: height }}
      Show={Show}
    >
      <Label>
        {title === "Weboon Title" && Webtoon.Title
          ? Webtoon.Title
          : title === "Webtoon Episode" && Webtoon.Episode
          ? Webtoon.Episode
          : placeholder}
        <img src={SelectImg} alt="selectImg" />
      </Label>
      <Selects Show={Show}>
        {data.map((item, idx) => {
          return (
            <Option key={idx} onClick={handleChange}>
              {item}
            </Option>
          );
        })}
      </Selects>
    </SelectBox>
  );
};

export default Select;
