import React, { useState } from "react";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";
import { createStore } from "redux";
import { Provider } from "react-redux";

const App = () => {
  const initialState = {
    message: "Działa!",
    time: new Date(),
    users: [],
  };

  const getCurrentTimeValue = () => {
    return {
      type: "getCurrentTime",
    };
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "getCurrentTime":
        return { ...state, time: new Date() };
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  return (
    <>
      <Task01 />
      <Provider store={store}>
        <Task02 />
        <Task03 />
      </Provider>
      <Task04 />
      {/* <Task05 /> */}
    </>
  );
};

export default App;
