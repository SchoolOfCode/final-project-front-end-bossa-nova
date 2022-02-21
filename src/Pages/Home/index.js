import React, { useState } from "react";
import data from "./../data";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import styles from "./Home.module.css";

function PreviewTable() {
  const navigate = useNavigate();

  const [jobDisplay, setJobDisplay] = useState(data);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/add-new");
        }}
      >
        Add new job
      </button>
      <div className={styles.PreviewTable}>
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobDisplay.map((jobDisplay) => (
              <tr
                key={jobDisplay._id}
                item={jobDisplay}
                onClick={() => {
                  navigate("/update" + "/" + jobDisplay._id);
                }}
              >
                <td>{jobDisplay.jobTitle}</td>
                <td>{jobDisplay.company}</td>
                <td>
                  {jobDisplay.minSalary} - {jobDisplay.maxSalary}
                </td>
                <td>{jobDisplay.jobStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PreviewTable;

/* <main className={styles.Hero}>
      
        <p>my popup</p>
      </CreateForm>
      <PreviewTable />
    </main> */
