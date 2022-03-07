import React, { useContext } from 'react';
import { UserContext } from '../App';
export default function ContextExampleC(){

    const data = useContext(UserContext)
    return (
        <h1>Componect C: value is: {data.name} , {data.value}</h1>
    )

}