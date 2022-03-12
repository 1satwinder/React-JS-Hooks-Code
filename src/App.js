import React, { useReducer } from "react";
import ClassCounter from "./components/classCounter";
import HooksCounter from "./components/HooksCounter";
import HooksCounter2 from "./components/HooksCounter2";
import HooksEffect from "./components/HooksEffect";
import IntervalHooksCounter from "./components/IntervalHooksCounter";
import ReducerCount from "./components/reducerCount";
import ReducerCountObject from "./components/ReduceCountObject";
import ContextExampleA from "./components/ContextExampleA";
import FocusInput from "./components/FocusInput";

export const CountContext = React.createContext();

// if we use state as object then in reducer function we return an object in given cases
const initialState = 0;

const reducer = (state, action) => {  
  console.log("In reducer");
   switch (action.type) {
     case 'increament': 
       return state + action.value;
      case 'decreament':
        return state - action.value;
      case 'reset': 
        return 0;
      default: return state;  
   }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <CountContext.Provider value={ { state, dispatch} }>
        <ContextExampleA></ContextExampleA>
      </CountContext.Provider>

      <h1>usRef Example</h1>
      <FocusInput/> 
    </div>
  );
}

export default App;
