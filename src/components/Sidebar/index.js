import React from "react";
import styles from "./Sidebar.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.SidebarNav}>
        <li className="applications">My Applications</li>
        <li className="checklist">Document Checklist</li>
        <li
          className="resources"
          onClick={() => {
            navigate("/resources");
          }}
        >
          Resources
        </li>
        <li className="next-interviews">Next Interviews</li>
      </ul>
    </div>
  );
}

export default Sidebar;
