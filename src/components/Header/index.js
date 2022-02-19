import React from "react";
import styles from "./Header.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <nav className={styles.Header}>
      <div
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        logo home button
      </div>
      <div
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Log Out
      </div>
    </nav>
  );
}

export default Header;
