import React, {useState} from 'react'

function HooksCounter() {

    // Hooks are function so we call them
    const [state, setstate] = useState(0)
    function increament(){
        // use function as a argument in case if updating from previous state.
        setstate(prevoius => prevoius+1)
        setstate(prevoius => prevoius+1)
        setstate(prevoius => prevoius+1)
        setstate(prevoius => prevoius+1)
    }

    return (
        <div>
            {/* setState() method makes the component re render */}
            <button onClick={ () => setstate(state+1)}> Click Hooks Count {state}</button>
  
            {/* using function as argument to change state. */}
            <button onClick={ () => setstate(prevoius => prevoius+1 )}> Hooks Count {state}</button>

            <button onClick={ increament}> Click Hooks Count {state}</button>
        </div>
    )
}

export default HooksCounter;
