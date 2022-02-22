import { useState } from "react";
import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  // Link,
  // Navigate,
  useNavigate,
} from "react-router-dom";

import styles from "./AddNew.module.css";
import TextField from "../../components/TextField";

// save and cancel buttons have the same value, save will need to be changed so it saves the data. the cancel button just closes popup

function AddNew(props) {
  const navigate = useNavigate();

  const [typedText, setTypedText] = useState("");

  function getInputValue(e) {
    return setTypedText(e.target.value);
  }

  console.log(typedText);

  return (
    <div>
      <form className={styles.AddNew}>
        <TextField
          label={"Job Title"}
          dataType={"text"}
          onChange={getInputValue}
          value={typedText}
        />

        {/* <label>Job Title</label>
        <input className="jobTitle"></input>
        <label>Company</label>
        <input className="company"></input>
        <label>Salary</label>
        <input className="salary"></input>
        <label>Status</label>
        <select className="status">
          <option>Watching</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
        </select> */}
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

export default AddNew;
