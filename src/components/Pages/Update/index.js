import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import data from "./../../data";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./UpdateForm.module.css";

function UpdateForm(date) {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [offerDate, setOfferDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [interviewDate, setInterviewDate] = useState(new Date());

  const [jobDisplay, setJobDisplay] = useState();

  // useEffect(async () => {
  //   let result = await fetch(data._id);
  //   result = await result.json();
  //   setJobDisplay(result);
  // });

  return (
    <div>
      <h2>company name and job title</h2> {/* we need to import this data */}
      <form className={styles.UpdateForm}>
        <label>Job Title</label>
        <input type="text" className="jobTitle" defaultValue={data.jobTitle} />
        <label>Contact</label>
        <input type="text" className="contact" defaultValue={data.contact} />
        <label>Application deadline</label>
        <DatePicker
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
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        {console.log("Date added: ", date)}

        <label>Company</label>
        <input type="text" className="company" defaultValue={data.company} />
        <label>URL links</label>
        <input type="text" className="URLLink" defaultValue={data.urlLink} />
        <label>Interview date</label>
        <DatePicker
          selected={interviewDate}
          onChange={(date) => setInterviewDate(date)}
        />
        <label>Location</label>
        <input type="text" className="location" defaultValue={data.location} />
        <label>Offer date</label>
        <DatePicker
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
