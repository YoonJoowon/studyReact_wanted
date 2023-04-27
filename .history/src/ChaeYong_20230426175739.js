import React from "react";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import './css/Chae.css'

import Chaeslide from './containersChaeyong/Chaeslide';
import ChaeMatch from './containersChaeyong/ChaeMatch';
import ChaeBanner from './containersChaeyong/ChaeBanner';
import ChaeCompany from './containersChaeyong/ChaeCompany';
import ChaePosition from './containersChaeyong/ChaePosition';

function ChaeYong() {
  return (
    <div className="wrapper">
      <Nav />

      <Chaeslide />
      <ChaeMatch />
      <ChaeBanner />
      <ChaeCompany />
      <ChaePosition />

      <Footer />
    </div>
  );
}

export default ChaeYong;
