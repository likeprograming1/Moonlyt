import React from "react";
import { useRecoilValue } from "recoil";
import { ProfileState } from "../../../../recoil/profile/profile";
import InvestImage from "../../../../components/webtoonImage/webtoonImage";

const MyWebtoon = () => {
  const data = useRecoilValue(ProfileState);

  return <InvestImage data={data.webtoon} bottom="222.61px" />;
};

export default MyWebtoon;
