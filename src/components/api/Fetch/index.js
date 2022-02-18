import React from "react";
import useFetch from "react-hook-usefetch";

function Fetch() {
  const { isLoading, data, error } = useFetch(
    `https://job-tracker-main.herokuapp.com/api/jobs`
  );

  console.log(isLoading, data, error && error.status);

  return <div></div>;
}

export default Fetch;
