import React from "react";

import SangMainSlide from "./containersSangse/SangMainSlide";
import SangMainTxt from "./containersSangse/SangMainTxt";
import SangBotMap from "./containersSangse/SangBotMap";
import SangPosition from "./containersSangse/SangPosition";
import { useParams } from "react-router-dom";


function Sang() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="wrapper">
      <main className="main_main">
        <SangMainSlide />
        <SangMainTxt />
        <SangBotMap />
      </main>
        <SangPosition />
    </div>
  );
}

export default Sang;
