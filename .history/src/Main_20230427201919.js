import React from "react";
import './css/main.css'

import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Insite from './containers/Insite';
import Carrer from './containers/Carrer';
import Slide from './containers/Slide';
import Information from './containers/Information';
import InsiteBar2 from './containers/InsiteBar2';


function Main() {
  return (
    <div className="wrapper">
      <Nav />
      <Slide></Slide>
      <Insite></Insite>
      <InsiteBar2 />
      <Carrer />
      <Information />
      <Footer />
    </div>
  );
}

export default Main;
