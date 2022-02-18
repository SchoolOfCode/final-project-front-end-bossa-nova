import React, { useState, useEffect } from "react";
import useFetch from "react-hook-usefetch";

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://job-tracker-main.herokuapp.com/api/jobs`
      );
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  console.log(data);
  return <p>{data && data[0].jobTitle}</p>;
}

export default Fetch;

// `https://job-tracker-main.herokuapp.com/api/jobs`
