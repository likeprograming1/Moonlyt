import React from "react";
import InvestComponent from "../../../../components/invest/investComponents";
import { useRecoilValue } from "recoil";
import { ProfileState } from "../../../../recoil/profile/profile";

const Nft = () => {
  const Nft = useRecoilValue(ProfileState);

  return <InvestComponent data={Nft.nft && Nft.nft} />;
};

export default Nft;
