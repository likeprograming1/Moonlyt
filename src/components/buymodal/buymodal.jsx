import React, { useEffect, useRef } from "react";
import { Button, ButtonBox, BuyBoxs, BuyContainer, TextBox } from "./style";

const Buymodal = (props) => {
  const { YesOnClick, NoOnClick, setBuyModal } = props;
  const modalRef = useRef();
  const closeModalOnClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // 모달 바깥을 클릭했을 때만 모달을 닫음
      setBuyModal(false);
    }
  };

  useEffect(() => {
    // 이벤트 핸들러를 추가
    document.addEventListener("mousedown", closeModalOnClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 핸들러를 제거
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    };
  }, []);

  return (
    <BuyContainer>
      <BuyBoxs ref={modalRef}>
        <TextBox>Are you sure to buy?</TextBox>
        <ButtonBox>
          <Button onClick={YesOnClick}>YES</Button>
          <Button onClick={NoOnClick}>NO</Button>
        </ButtonBox>
      </BuyBoxs>
    </BuyContainer>
  );
};

export default Buymodal;
