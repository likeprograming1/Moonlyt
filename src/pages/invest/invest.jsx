import React, { useState } from "react";
import { Box, BoxTitle, Boxs, HotBox } from "../main/style";
import Category from "../../components/subcategory/category";
import { Container, ContainerBox } from "./style";
import { InvestImages } from "../../data/data";
import InvestComponent from "../../components/invest/investComponents";
import InvestBuy from "./components/investbuy/investbuy";

const Invest = () => {
  const names = ["Newest", "Latest"];
  const [Modal, setModal] = useState(false);
  const [Id, setId] = useState(0);
  return (
    <ContainerBox>
      {Modal ? (
        <InvestBuy Id={Id} setModal={setModal} data={InvestImages} />
      ) : null}
      <Container>
        <Boxs className="Head">
          <Box top="105px">
            <HotBox>NFT</HotBox>
            <BoxTitle>INVEST</BoxTitle>
          </Box>
          <Box>
            <Category names={names} child={0} right="28px"></Category>
          </Box>
        </Boxs>
        <InvestComponent
          data={InvestImages}
          buy={true}
          setModal={setModal}
          setId={setId}
        />
      </Container>
    </ContainerBox>
  );
};

export default Invest;
