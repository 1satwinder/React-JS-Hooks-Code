import React, {useState, useEffect} from 'react'

function HooksEffect() {
    
    const [state, setstate] = useState(0);
    const [Name, setName] = useState('');

    // this function is called after every render(). 
    // In order to conditionally run useEffect() pass second argument which is array
    // of variable which changes the only useEffect runs otherwise not.
    // If array is empty then it is only called once.
    useEffect( () => {
        document.title= `You clicked ${state}`;
    }, [state]);

    return (
        <div>
            <input type='text' value={Name} onChange={ (e) => setName(e.target.value) } />
            <button onClick={() => setstate(state+1) }> Count {state}</button>
        </div>
    )
}

export default HooksEffect
