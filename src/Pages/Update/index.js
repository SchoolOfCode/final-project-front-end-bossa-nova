import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./UpdateForm.module.css";

function UpdateForm(date) {
  const navigate = useNavigate(); // navigate between pages

  const data = {
    _id: "620fe139611b39e572cb0f6b",
    userID: 1,
    jobTitle: "Backend",
    company: "Apple",
    jobStatus: "applied",
    minSalary: 25000,
    maxSalary: 30000,
    techStack: "react.js",
    contact: "Rita Blogs",
    dateAdded: "2023/10/29",
    applicationDeadline: "2023/10/10",
    interviewDate: "2023/10/10",
    offerDate: "2023/10/10",
    urlLinks: "www.exmple.com",
    location: "Remote",
    jobDescription: "Working work working work",
    notes: "my notes",
    __v: 0,
  };

  // calendar picker for each Date field
  const [startDate, setStartDate] = useState(new Date(data["dateAdded"]));
  const [offerDate, setOfferDate] = useState(new Date(data["offerDate"]));
  const [deadlineDate, setDeadlineDate] = useState(
    new Date(data["applicationDeadline"])
  );
  const [interviewDate, setInterviewDate] = useState(
    new Date(data["interviewDate"])
  );

  //The job ID will be replaced for the ID on the url
  // const jobID = "62135d711c36280c3e517323";

  // const [data, setData] = useState("");

  // // Potentially have it on custom Hook
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://job-tracker-main.herokuapp.com/api/jobs/${jobID}`
  //     );
  //     console.log(response);

  //     const jobData = await response.json();
  //     console.log(jobData);

  //     setData(jobData);
  //   }

  //   fetchData();
  // }, []);

  console.log(data);

  return (
    <div>
      <h2>
        {data.jobTitle}: {data.company}
      </h2>
      <form className={styles.UpdateForm}>
        <label>Job Title</label>
        <input type="text" className="jobTitle" defaultValue={data.jobTitle} />
        <label>Contact</label>
        <input type="text" className="contact" defaultValue={data.contact} />
        <label>Application deadline</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={deadlineDate}
          onChange={(date) => setDeadlineDate(date)}
        />
        <label>Salary</label>
        <input
          type="number"
          className="salaryMin"
          placeholder="Min Salary"
          defaultValue={data.minSalary}
        />
        <input
          type="number"
          className="salaryMax"
          placeholder="Max Salary"
          defaultValue={data.maxSalary}
        />
        <label>Tech Stack</label>
        <input
          type="text"
          className="techStack"
          defaultValue={data.techStack}
        />
        <label>Date added</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <label>Company</label>
        <input type="text" className="company" defaultValue={data.company} />
        <label>URL links</label>
        <input type="text" className="URLLink" defaultValue={data.urlLink} />
        <label>Interview date</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={interviewDate}
          onChange={(date) => setInterviewDate(date)}
        />
        <label>Location</label>
        <input type="text" className="location" defaultValue={data.location} />
        <label>Offer date</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={offerDate}
          onChange={(date) => setOfferDate(date)}
        />
        <label>Job description</label>
        <textarea
          type="text"
          className="jobDescription"
          defaultValue={data.jobDescription}
        />
        <label>Status</label>
        <select type="text" className="status" defaultValue={data.status}>
          <option>Watching</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
        </select>
        <label>Notes</label>
        <textarea type="text" className="notes" defaultValue={data.notes} />
        <div className={styles.Buttons}>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
