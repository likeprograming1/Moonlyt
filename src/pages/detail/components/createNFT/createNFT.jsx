import React, { useState } from "react";
import { Boxs } from "./style";

const CreateNFT = ({ setModal, Modal }) => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [paymentPeriod, setPaymentPeriod] = useState(0);
  const [fundingDuration, setFundingDuration] = useState(0);

  console.log(name);
  console.log(symbol);
  console.log(supply);
  console.log(price);
  console.log(paymentPeriod);
  console.log(fundingDuration);
  return (
    <Boxs>
      <div className="NFTArea">
        <button
          className="CreateCloseBtn"
          onClick={() => {
            setModal((prev) => ({
              ...prev,
              NFT: !Modal.NFT,
            }));
          }}
        >
          x
        </button>
        <input
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <input
          placeholder="symbol"
          onChange={(event) => {
            setSymbol(event.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="supply"
          onChange={(event) => {
            setSupply(event.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="price"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="paymentPeriod"
          onChange={(event) => {
            setPaymentPeriod(event.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="fundingDuration"
          onChange={(event) => {
            setFundingDuration(event.target.value);
          }}
        ></input>
        <button className="CreateBtn" onClick={() => {}}>
          create
        </button>
      </div>
    </Boxs>
  );
};

export default CreateNFT;
