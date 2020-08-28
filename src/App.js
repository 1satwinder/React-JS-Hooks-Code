import React from "react";
import ClassCounter from "./components/classCounter";
import HooksCounter from "./components/HooksCounter";
import HooksCounter2 from "./components/HooksCounter2";
import HooksEffect from "./components/HooksEffect";
import IntervalHooksCounter from "./components/IntervalHooksCounter";
import ReducerCount from './components/reducerCount'
import ReducerCountObject from "./components/ReduceCountObject";
function App() {
  return (
    <div className="App">
      <h1> Hello world </h1>
      <ClassCounter></ClassCounter>
      <HooksCounter></HooksCounter>

      <h1> Hooks 2</h1>

      <HooksCounter2></HooksCounter2>

      <h1>Hooks Effects Updating title of the page.</h1>

      <HooksEffect></HooksEffect>

      <h1>Interval Hooks counter.</h1>
      <IntervalHooksCounter />

      <h1>Reducer Counter.</h1>
      <ReducerCount></ReducerCount>

      <h1>Reducer with object</h1>
      <ReducerCountObject></ReducerCountObject>
    </div>
  );
}

export default App;
