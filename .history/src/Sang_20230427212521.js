import React from "react";
import "./css/Sang.css";

import SangMainSlide from "./containersSangse/SangMainSlide";
import SangMainTxt from "./containersSangse/SangMainTxt";
import SangBotMap from "./containersSangse/SangBotMap";
import SangPosition from "./containersSangse/SangPosition";
import { useParams } from "react-router-dom";

function Sang() {

  const { id } = useParams();
  console.log(useParams(id));

  return (
    <div>
      <main className="main_main">
        {/* <SangMainSlide /> */}
        <SangMainTxt />
        <SangBotMap />
      </main>
      <SangPosition />
    </div>
  );
}

export default Sang;
