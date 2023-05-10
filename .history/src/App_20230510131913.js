import React, { useEffect, useRef } from "react";
import Main from "./Main";
import ChaeYong from "./ChaeYong";
import Sang from "./Sang";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import SearchList from "./containerSearch/SearchList";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  return newState;
}

const store = createStore();

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/ChaeYong" element={<ChaeYong />}></Route>
          <Provider store={store}>
            <Route path="/Sang/:id" element={<Sang />}></Route>
          </Provider>

          <Route path="/SearchList" element={<SearchList />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
