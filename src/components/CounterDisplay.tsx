import { useCounter } from "../context/counter-context";

import React from "react";

const CounterDisplay = () => {
  const { state, dispatch } = useCounter();
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterDisplay;
