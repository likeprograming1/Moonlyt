import React, { useEffect, useState } from "react";
import { TitleBox, Title } from "./style";
import { useNavigate } from "react-router-dom";
import { handleclick } from "./components/handleclick";
import { useRecoilValue } from "recoil";
import { Author } from "../../recoil/login/login";

const Category = ({ names, right, child, bottom }) => {
  const [clicked, setClicked] = useState(0);
  const navigate = useNavigate();
  const Mode = useRecoilValue(Author);
  const [Loading, setLoading] = useState(Mode);
  const [Names, setName] = useState(names);

  useEffect(() => {
    return () => {
      if (!Mode) {
        setName(
          names.map((item) => {
            return item !== "My Webtoon" ? item : null;
          })
        );
      } else {
        setName(names);
      }
      setLoading(!Loading);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Mode, Loading]);

  return (
    <TitleBox $bottom={bottom}>
      {Names &&
        Names.map((item, idx) => {
          return (
            <Title
              child={child}
              right={right}
              className={clicked === idx ? "click" : "nonClick"}
              onClick={() => {
                setClicked(idx);
                const location = handleclick(item);
                navigate(location);
              }}
              key={idx}
            >
              {item}
            </Title>
          );
        })}
    </TitleBox>
  );
};

export default Category;
