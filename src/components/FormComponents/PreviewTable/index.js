import React, { useState } from "react";
import data from "../../data";
import UpdateForm from "../UpdateForm";

function PreviewTable() {
  const [jobDisplay, setJobDisplay] = useState(data);

  const [jobUpdate, setJobUpdate] = useState(false);

  return (
    <div>
      <table>
        <thread>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thread>
        <tbody>
          {jobDisplay.map((jobDisplay) => (
            <tr onClick={() => setJobUpdate(true)}>
              <td>{jobDisplay.jobTitle}</td>
              <td>{jobDisplay.company}</td>
              <td>
                {jobDisplay.salary.minSalary} - {jobDisplay.salary.maxSalary}
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
