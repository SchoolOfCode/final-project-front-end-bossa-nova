import React from "react";

function CreateForm() {
  return (
    <div>
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
        <button>save</button>
        <button>cancel</button>
      </form>
    </div>
  );
}

export default CreateForm;
