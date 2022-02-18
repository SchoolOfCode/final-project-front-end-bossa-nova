import React, { useState, useEffect } from "react";
import data from "../../data";

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

  const navigate = useNavigate();

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
            {data &&
              data.map((job) => (
                <tr
                  key={job._id}
                  onClick={() => {
                    navigate(`/update/${job._id}`);
                  }}
                >
                  <td>{job.jobTitle}</td>
                  <td>{job.company}</td>
                  <td>
                    {job.minSalary} - {job.maxSalary}
                  </td>
                  <td>{job.jobStatus}</td>
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
