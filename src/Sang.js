import React from "react";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import "./css/Sang.css";

import SangMainSlide from "./containersSangse/SangMainSlide";
import SangMainTxt from "./containersSangse/SangMainTxt";
import SangBotMap from "./containersSangse/SangBotMap";
import SangPosition from "./containersSangse/SangPosition";

function Sang() {
  return (
    <div>
      <Nav />
      <main className="main_main">
        <SangMainSlide />
        <SangMainTxt />
        <SangBotMap />
      </main>
      <SangPosition />
      <Footer />
    </div>
  );
}

export default Sang;
