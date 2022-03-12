import React, { useContext } from "react";
import { CountContext } from "../App";
import ContextExampleB from "./ContextExampleB";

export default function ContextExampleA() {
  const data = useContext(CountContext);
  return (
    <>
      {data.state}
      <button onClick={() => data.dispatch({type: 'increament', value:1 })}>Increament</button>
      <button onClick={() => data.dispatch({type: 'decreament', value:1 })}>Decreament</button>
      <button onClick={() => data.dispatch({type: 'reset'})}>Reset</button>
      <br/>
      <ContextExampleB /> 
    </>
  );
}
