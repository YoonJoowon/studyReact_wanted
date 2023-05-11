import React, { useEffect, useRef } from "react";
import Main from "./Main";
import ChaeYong from "./ChaeYong";
import Sang from "./Sang";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import SearchList from "./containerSearch/SearchList";
import Bookmark from "./containerMy/Bookmark";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ChaeYong" element={<ChaeYong />} />
          <Route path="/Sang/:id" element={<Sang />} />
          <Route path="/SearchList" element={<SearchList />} />
          <Route path="/Bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
