import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

// function reducer(currentState, action) {
//   if (currentState === undefined) {
//     return {
//       number :1
//     };
//   }
//   const newState = { ...currentState };
//   if(action.type === "SAVE"){

//   }

//   return newState;
// }

const initialState = {
  selectedText: null,
};

const SET_SELECTED_TEXT = "SET_SELECTED_TEXT";

export const setSelectedText = (text) => ({
  type: SET_SELECTED_TEXT,
  payload: text,
});

function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TEXT:
      return { ...state, selectedText: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
