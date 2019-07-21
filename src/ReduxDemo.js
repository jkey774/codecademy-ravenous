import React, { Component } from "react";
import { createstore, createStore } from "redux";

class ReduxDemo extends Component {
  state = {};
  render() {
    // Step 1: reducer - state and action
    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      if (action.type === "GREENATTACK") {
        return action.payload;
      }
      return state;
    };

    // Step 2: store - reducer and state
    const store = createStore(reducer, "Peace");

    // Step 3: subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    // Step 4: dispatch action
    store.dispatch({ type: "ATTACK", payload: "Iron Man" });
    store.dispatch({ type: "GREENATTACK", payload: "HULK" });

    return <div>Test</div>;
  }
}

export default ReduxDemo;
