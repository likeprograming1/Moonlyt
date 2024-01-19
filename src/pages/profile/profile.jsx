import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../recoil/login/login";
import { Container, ContainerBox, ContainerHeader } from "./style";
import Category from "../../components/subcategory/category";
import Content from "./components/title";
import { names } from "../../data/data";
import WebtoonModal from "./components/modal/modal";

const Myprofile = () => {
  const params = useParams();
  const Account = useRecoilValue(LoginState);
  const [Modal, setModal] = useState(false);
  console.log(Account);
  useLayoutEffect(() => {
    if (Account.account === "") {
      window.location.assign("http://localhost:3000/");
    }
  }, []);

  return (
    <Container>
      {Modal ? <WebtoonModal setModal={setModal} /> : null}
      <ContainerBox>
        <ContainerHeader>My Profile</ContainerHeader>
        <Category names={names} bottom="72px" right="31px"></Category>
        {Account && Account.account === "" ? null : (
          <Content param={params} setModal={setModal} Modal={Modal} />
        )}
      </ContainerBox>
    </Container>
  );
};

export default Myprofile;
