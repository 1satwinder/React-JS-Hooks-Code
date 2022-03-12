import React, { useContext } from "react";
import { CountContext } from "../App";

export default function ContextExampleC() {
  const data = useContext(CountContext);
  return (
    <>
      {data.state}
      <button onClick={() => data.dispatch({ type: "increament", value: 3 })}>
        Increament
      </button>
      <button onClick={() => data.dispatch({ type: "decreament", value: 3 })}>
        Decreament
      </button>
      <button onClick={() => data.dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
