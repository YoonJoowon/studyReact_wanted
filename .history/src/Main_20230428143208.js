import React from "react";
import './css/main.css'

import Insite from './containers/Insite';
import Carrer from './containers/Carrer';
import Information from './containers/Information';
import InsiteBar2 from './containers/InsiteBar2';
import MainSlide from "./containers/MainSlide";

function Main() {
  return (
    <div className="wrapper">

      <MainSlide></MainSlide>
      <Insite></Insite>
      <InsiteBar2 />
      <Carrer />
      <Information />

    </div>
  );
}

export default Main;