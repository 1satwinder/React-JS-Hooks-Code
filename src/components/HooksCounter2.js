import React, { useState } from "react";

function HooksCounter2() {
  // two state variables
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Using object as variable
  const [data, setdata] = useState({
    firstName: "singh",
    lastName: "satwinder",
  });

  // setdata() function provided by hooks do not automatically merge and update objects.
  // this destruction is used
  function handleFirstName(event) {
    setdata({ ...data, firstName: event.target.value });
  }

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}> Count {count1} </button>
      <button onClick={() => setCount2(count2 + 1)}> Count {count2} </button>

      <h1>Using object as state</h1>

      <input type="text" value={data.firstName} onChange={handleFirstName} />
      <input
        type="text"
        value={data.lastName}
        onChange={(event) => setdata({ ...data, lastName: event.target.value })}
      />

      <h1>
        first name: {data.firstName}, last name: {data.lastName}
      </h1>
    </div>
  );
}

export default HooksCounter2;
