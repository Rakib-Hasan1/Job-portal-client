import React, { use } from "react";
import { Link } from "react-router";

const JobsList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2>Job Created by You : {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job title</th>
              <th>Application Deadline</th>
              <th>Category</th>
              <th>Count</th>
              <th>Job Details</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.category}</td>
                <td>{job.application_count}</td>
                <td><Link className="btn btn-sm" to={`/applications/${job._id}`}>View details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;
