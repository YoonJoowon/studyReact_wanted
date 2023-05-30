import React from "react";

import ChaeSlide from "./containersChaeyong/ChaeSlide";
import ChaeMatch from "./containersChaeyong/ChaeMatch";
import ChaeBanner from "./containersChaeyong/ChaeBanner";
import ChaeCompany from "./containersChaeyong/ChaeCompany";
import ChaePosition from "./containersChaeyong/ChaePosition";
import MainSlide from "./containers/MainSlide";

function ChaeYong() {

  return (
    <div className="wrapper">
      <MainSlide />
      <ChaeMatch />
      <ChaeBanner />
      <ChaeCompany />
      <ChaePosition />
    </div>
  );
}

export default ChaeYong;
