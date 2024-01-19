import React, { useState } from "react";
import { NavbarContainer, NavbarBoxs, NavbarAdult } from "./style";

const Navbar = ({ data }) => {
  const [select, setSelect] = useState(0);

  return (
    <NavbarContainer>
      {data &&
        data.map((item, idx) => {
          return (
            <NavbarBoxs
              data={data.length}
              key={idx}
              className={select === idx ? "active" : ""}
              onClick={() => {
                setSelect(idx);
              }}
            >
              {item}
              {item === "Adult" ? <NavbarAdult>19+</NavbarAdult> : null}
            </NavbarBoxs>
          );
        })}
    </NavbarContainer>
  );
};

export default Navbar;
