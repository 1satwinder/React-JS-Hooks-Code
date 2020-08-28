import React, {useReducer} from 'react';

const initialState = 0;

const reducer= (state , action ) => {

    switch(action){
        case 'increament':
            return state + 1
        case 'decreament':
            return state + 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function ReducerCount() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch('increament')}>Increament</button>
            <button onClick={()=> dispatch('decreament')}>Decreament</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCount;
