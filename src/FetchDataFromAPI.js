import React, { useEffect, useState } from 'react'

function FetchDataFromAPI() {
  const[data, setData] =  useState([]);
  const [userCount, setUserCount] = useState(1);

   useEffect( () => {
       fetch(`https://randomuser.me/api/?page=${userCount}`)
       .then( res => res.json())
       .then( responseData => setData([ ...responseData.results,  ...data] ))
   },[userCount]);

   useEffect( () =>{
      console.log(data);
   },[data])

  return (
    <div> 
        <h1>FetchDataFromAPI</h1>
       { data && data.map( (person) => {
           return (
               <>
                 <p>{person.email}</p>
                 <p>First Name {person.name.first} </p>
                 <p>Last Name {person.name.last} </p>
                 <hr/>
               </>
         )
       })}
       <button onClick={() => setUserCount(userCount+1)}>Add Another user</button>
   
    </div>
  )
}

export default FetchDataFromAPI;