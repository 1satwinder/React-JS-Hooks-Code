import React, { useState, useEffect } from "react";

const fetchData = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();
    console.log(data.results);
    return data.results;
  } catch (e) {
    console.log(e);
    return e;
 }
};

function FetchDataFromAPI2() {
  const [data, setData] = useState(null);
  useEffect(() => {
      const fetch = async () => {
        setData(await fetchData());
      }
      fetch();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}

export default FetchDataFromAPI2;
