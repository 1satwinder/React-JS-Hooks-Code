import React, { useState, useEffect } from "react";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        // an error occured
        reject(err);
      });
  });
};

function FetchDataFromAPI3() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}

export default FetchDataFromAPI3;
