import React, { useEffect, useRef } from 'react';

export default function FocusInput(){
    const inputRef = useRef(null);

    useEffect( () => {
        inputRef.current.focus();
    })
    return(
        <>
        <input type='text' ref={inputRef} size="70"/>
        <br/> 
        <br/>
        </>
    )
}