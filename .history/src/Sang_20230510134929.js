import React from "react";
import "./css/Sang.css";

import SangMainSlide from "./containersSangse/SangMainSlide";
import SangMainTxt from "./containersSangse/SangMainTxt";
import SangBotMap from "./containersSangse/SangBotMap";
import SangPosition from "./containersSangse/SangPosition";
import { useParams } from "react-router-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// function reducer(currentState, action) {
//   if (currentState === undefined) {
//     return {
//       number: 1,
//     };
//   }
//   const newState = { ...currentState };
//   return newState;
// }

// const store = createStore(reducer);

function Sang() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="wrapper">
      <main className="main_main">
        <SangMainSlide />
        <SangMainTxt />
        <SangBotMap />
      </main>

      {/* <Provider store={store}> */}
        <SangPosition />
      {/* </Provider> */}
    </div>
  );
}

export default Sang;
