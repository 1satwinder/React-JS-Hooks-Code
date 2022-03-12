import React, { useContext } from "react";
import { CountContext } from "../App";
import ContextExampleC from "./ContextExampleC";

export default function ContextExampleB() {
  const data = useContext(CountContext);
  return (
    <>
      {data.state}
      <button onClick={() => data.dispatch({type: 'increament', value:2 })}>Increament</button>
      <button onClick={() => data.dispatch({type: 'decreament', value:2 })}>Decreament</button>
      <button onClick={() => data.dispatch({type: 'reset'})}>Reset</button>
      <br/>
      <ContextExampleC />
      <br/>
    </>
  );
}
