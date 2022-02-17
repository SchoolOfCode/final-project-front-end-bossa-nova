import React from "react";

function UpdateForm(props) {
  return props.trigger ? (
    <div>
      <h2>company name and job title</h2> {/* we need to import this data */}
      <form>
        <label>Job Title</label>
        <input className="jobTitle"></input>
        <label>Contact</label>
        <input className="contact"></input>
        <label>Application deadline</label>
        <input className="applicationDeadline"></input>
        <label>Salary</label>
        <input className="salaryMin" placeholder="Minimun Salary"></input>
        <input className="salaryMax" placeholder="Minimun Salary"></input>
        <label>Tech Stack</label>
        <input className="techStack"></input>
        <label>Date added</label>
        <input className="dateAdded"></input>
        <label>Company</label>
        <input className="company"></input>
        <label>URL links</label>
        <input className="URLLink"></input>
        <label>Interview date</label>
        <input className="interviewDate"></input>
        <label>Location</label>
        <input className="location"></input>
        <label>Offer date</label>
        <input className="offerDate"></input>
        <label>Job description</label>
        <textarea className="jobDescription"></textarea>
        <label>Status</label>
        <select className="status">
          <option>Watching</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
        </select>
        <label>Notes</label>
        <textarea className="notes"></textarea>
        <button type="button" onClick={() => props.setTrigger(false)}>
          update
        </button>
        <button type="button" onClick={() => props.setTrigger(false)}>
          Cancel
        </button>

        <div className={styles.Buttons}>
          <button onClick={() => props.setTrigger(false)}>update</button>
          <CancelButton />
        </div>
      </form>
    </div>
  ) : (
    ""
  );
}

export default UpdateForm;
