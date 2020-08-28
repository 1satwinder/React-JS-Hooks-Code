import React, {useReducer} from 'react';

const initialState = {
    firstcount: 0 
};

const reducer= (state , action ) => {

    switch(action.type){
        case 'increament':
            return {firstcount: state.firstcount+ action.value}
        case 'decreament':
            return {firstcount: state.firstcount- action.value}
        case 'reset':
            return  initialState;
        default:
            return state;
    }
}


function ReducerCountObject() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count.firstcount}</div>
            <button onClick={()=> dispatch({type: 'increament', value: 1})}>Increament</button>
            <button onClick={()=> dispatch({type: 'decreament', value: 1})}>Decreament</button>

            <button onClick={()=> dispatch({type: 'increament', value: 5})}>Increament by 5</button>
            <button onClick={()=> dispatch({type: 'decreament', value: 5})}>Decreament by 5</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerCountObject;
