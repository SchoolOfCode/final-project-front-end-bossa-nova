import React from "react";
import CancelButton from "../../ReusableComponents/CancelButton";

// save and cancel buttons have the same value, save will need to be changed so it saves the data. the cancel button just closes popup

function CreateForm(props) {
  return props.trigger ? (
    <div className="addNew">
      <form>
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
        <button onClick={() => props.setTrigger(false)}>save</button>
        <CancelButton />
      </form>
    </div>
  ) : (
    ""
  );
}

export default CreateForm;
