import React from "react";

// this will probably be better created via react rather than hardcoded

function Hero() {
  return (
    <div className="Hero">
      <button>Add New</button>
      <table>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Full Stack dev</td>
          <td>Apple</td>
          <td>£27K</td>
          <td>Applied</td>
        </tr>
        <tr>
          <td>Full Stack dev</td>
          <td>Nexflix</td>
          <td>£27K</td>
          <td>Applied</td>
        </tr>
        <tr>
          <td>Full Stack dev</td>
          <td>FaceBook</td>
          <td>£27K</td>
          <td>Applied</td>
        </tr>
      </table>
    </div>
  );
}

export default Hero;
