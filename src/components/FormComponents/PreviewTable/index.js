import React, { useState } from "react";
import data from "../../data";

function PreviewTable() {
  const [jobDisplay, setJobDisplay] = useState(data);

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
            <tr>
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
    </div>
  );
}

export default PreviewTable;
