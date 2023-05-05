import React, { useEffect, useRef } from "react";
import Main from "./Main";
import ChaeYong from "./ChaeYong";
import Sang from "./Sang";
import Search from "./containers/Search"
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/ChaeYong" element={<ChaeYong />}></Route>
          <Route path="/Sang/:id" element={<Sang />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
