import React, { useState } from "react";
import data from "../../data";
import UpdateForm from "../UpdateForm";

function PreviewTable() {
  const [jobDisplay, setJobDisplay] = useState(data);

  const [jobUpdate, setJobUpdate] = useState(false);

  return (
    <div>
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
            <tr key={jobDisplay._id} onClick={() => setJobUpdate(true)}>
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

      <UpdateForm trigger={jobUpdate} setTrigger={setJobUpdate} />
    </div>
  );
}

export default PreviewTable;
