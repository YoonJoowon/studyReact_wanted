import React from "react";
import "./css/Chae.css";

import Chaeslide from "./containersChaeyong/Chaeslide";
import ChaeMatch from "./containersChaeyong/ChaeMatch";
import ChaeBanner from "./containersChaeyong/ChaeBanner";
import ChaeCompany from "./containersChaeyong/ChaeCompany";
import ChaePosition from "./containersChaeyong/ChaePosition";

function ChaeYong() {

  return (
    <div className="wrapper">
      <Chaeslide />
      <ChaeMatch />
      <ChaeBanner />
      <ChaeCompany />
      <ChaePosition />
    </div>
  );
}

export default ChaeYong;
