import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Error, Page not found!</h2>
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default Error;
