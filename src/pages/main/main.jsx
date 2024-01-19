import React from "react";
import { BoxsContainer } from "./style";
import Middle from "./components/middle";
import Head from "./components/head";
import Foot from "./components/Foot";

const Main = () => {
  return (
    <BoxsContainer>
      <Head />
      <Middle />
      <Foot />
    </BoxsContainer>
  );
};

export default Main;
