import React from "react";
import Main from "./Main";
import ChaeYong from "./ChaeYong";
import Sang from "./Sang";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/ChaeYong" element={<ChaeYong/>}></Route>
          <Route path="/Sang/id" element={<Sang/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
