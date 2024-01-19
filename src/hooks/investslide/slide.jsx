import React, { useEffect, useState } from "react";
import { ImgBOx, SliceCOntainer } from "./style";

const Slide = (props) => {
  const { Data } = props;
  const [Id, setId] = useState(0);
  const slide = Data.nft.slide;

  useEffect(() => {
    setTimeout(() => {
      if (Id < slide.length - 1) {
        setId(Id + 1);
      } else if (Id === slide.length - 1) {
        setId(0);
      }
    }, 3000);
  }, [Id]);
  return (
    <SliceCOntainer>
      <ImgBOx src={slide[Id]} alt={`slide${Id}`} />
    </SliceCOntainer>
  );
};

export default Slide;
