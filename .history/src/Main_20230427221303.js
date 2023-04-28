import React from "react";
import './css/main.css'

import Insite from './containers/Insite';
import Carrer from './containers/Carrer';
import Slide from './containers/Slide';
import Information from './containers/Information';
import InsiteBar2 from './containers/InsiteBar2';

function Main() {
  return (
    <div className="wrapper">

      <Slide></Slide>
      <Insite></Insite>
      <InsiteBar2 />
      <Carrer />
      <Information />

    </div>
  );
}

export default Main;
