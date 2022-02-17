import React from "react";
import CancelButton from "../../ReusableComponents/CancelButton";

import styles from "./CreateForm.module.css"

// save and cancel buttons have the same value, save will need to be changed so it saves the data. the cancel button just closes popup

function CreateForm(props) {
  return props.trigger ? (
    <div>
      <form className={styles.AddNew}>
        <label>Job Title</label>
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
        </select>
        <div className={styles.Buttons}>
          <button onClick={() => props.setTrigger(false)}>save</button>
          <CancelButton />
        </div>
      </form>
    </div>
  ) : (
    ""
  );
}

export default CreateForm;
