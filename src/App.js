import React, { useState } from "react";
import ClassCounter from "./components/classCounter";
import HooksCounter from "./components/HooksCounter";
import HooksCounter2 from "./components/HooksCounter2";
import HooksEffect from "./components/HooksEffect";
import IntervalHooksCounter from "./components/IntervalHooksCounter";
import ReducerCount from "./components/reducerCount";
import ReducerCountObject from "./components/ReduceCountObject";
import ContextExampleA from "./components/ContextExampleA";

export const UserContext = React.createContext();

function App() {
  const [data, setData] = useState({name:'Satwinder', value:20});
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

      <h1>Context with example</h1>
      <UserContext.Provider value={data}>
        <ContextExampleA></ContextExampleA>
      </UserContext.Provider>
    </div>
  );
}

export default App;
