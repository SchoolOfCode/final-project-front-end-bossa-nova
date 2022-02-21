import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { nanoid } from "nanoid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

// import { useState } from "react";
// import data from "./../data";

// import styles from "./Home.module.css";

// function PreviewTable() {

//   const [jobDisplay, setJobDisplay] = useState(data);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/add-new");
//         }}
//       >
//         Add new job
//       </button>
//       <div className={styles.PreviewTable}>
//         <table>
//           <thead>
//             <tr>
//               <th>Job Title</th>
//               <th>Company</th>
//               <th>Salary</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobDisplay.map((jobDisplay) => (
//               <tr
//                 key={jobDisplay._id}
//                 item={jobDisplay}
//                 onClick={() => {
//                   navigate("/update" + "/" + jobDisplay._id);
//                 }}
//               >
//                 <td>{jobDisplay.jobTitle}</td>
//                 <td>{jobDisplay.company}</td>
//                 <td>
//                   {jobDisplay.minSalary} - {jobDisplay.maxSalary}
//                 </td>
//                 <td>{jobDisplay.jobStatus}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PreviewTable;

/* <main className={styles.Hero}>
      
        <p>my popup</p>
      </CreateForm>
      <PreviewTable />
    </main> */

<th>Company</th>;
//               <th>Salary</th>
//               <th>Status</th>

const columns = [
  { id: "jobTitle", label: "Job Title", minWidth: 100 },
  { id: "company", label: "Company", minWidth: 100 },
  {
    id: "salary",
    label: "Salary",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-UK"),
  },
  {
    id: "jobStatus",
    label: "Status",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "buttons",
    label: "",
    minWidth: 60,
    align: "right",
  },
];

function createData({
  jobTitle,
  company,
  jobStatus,
  minSalary,
  maxSalary,
  _id,
}) {
  const salary = `£${minSalary} - £${maxSalary}`;
  return { jobTitle, company, salary, jobStatus, _id };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function StickyHeadTable() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://job-tracker-main.herokuapp.com/api/jobs`
      );
      const data = await response.json();
      const mappedData = data.map((job) => createData(job));
      setData(mappedData);
    }
    fetchData();
  }, []);

  console.log(data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={nanoid()}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((job) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={job._id}>
                      {columns.map((column) => {
                        return (
                          <TableCell key={nanoid()}>{job[column.id]}</TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
