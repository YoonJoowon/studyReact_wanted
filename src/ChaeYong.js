import React from "react";

import ChaeSlide from "./containersChaeyong/ChaeSlide";
import ChaeMatch from "./containersChaeyong/ChaeMatch";
import ChaeBanner from "./containersChaeyong/ChaeBanner";
import ChaeCompany from "./containersChaeyong/ChaeCompany";
import ChaePosition from "./containersChaeyong/ChaePosition";

function ChaeYong() {

  return (
    <div className="wrapper">
      <ChaeSlide />
      <ChaeMatch />
      <ChaeBanner />
      <ChaeCompany />
      <ChaePosition />
    </div>
  );
}

export default ChaeYong;
