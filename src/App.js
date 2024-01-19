import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/main/main";
import Invest from "./pages/invest/invest";
import Slide1 from "./hooks/slider/slide";
import { images } from "./data/data";
import Webtoon from "./pages/webtoon/webtoon";
import Myprofile from "./pages/profile/profile";
import Detail from "./pages/detail/detail";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function Roots() {
  const { pathname } = useLocation();

  return (
    <div className="main_box">
      <Header />
      {pathname === "/" || pathname === "/invest" || pathname === "/webtoon" ? (
        <Slide1 images={images} />
      ) : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/webtoon" element={<Webtoon />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/myprofile/:id" element={<Myprofile />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Roots;
