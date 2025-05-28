import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    category,
    salaryRange,
    description,
    requirements,
    applicationDeadline,
    jobType,
    company,
    responsibilities,
    hr_email,
    hr_name,
    status,
  } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-blue-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Employment Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Company</th>
              <td className="font-bold">{company}</td>
              <th>Location</th>
              <td>{location}</td>
            </tr>

            <tr>
              <th>Job Title</th>
              <td>{title}</td>
              <th>Industry</th>
              <td>{category}</td>
            </tr>

            <tr>
              <th>Salary</th>
              <td>
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </td>
              <th>Requirement</th>
              {requirements.map((req) => (
                <td>
                  <span className="px-2 py-1 bg-blue-300 rounded-full">
                    #{req}
                  </span>
                </td>
              ))}
            </tr>

            <tr>
              <th>Job Type</th>
              <td>{jobType}</td>
              <th>Responsibilities</th>
              {responsibilities.map((req) => (
                <td>
                  <span className="px-2 py-1 bg-blue-300 rounded-full">
                    #{req}
                  </span>
                </td>
              ))}
            </tr>

            <tr>
              <th>Deadline</th>
              <td>{applicationDeadline}</td>
              <th>Status</th>
              <td
                className={
                  status === "active" ? "text-green-500" : "text-red-500"
                }
              >
                {status}
              </td>
            </tr>

            <tr>
              <th>HR- Email</th>
              <td>{hr_email}</td>
              <th>HR- Name</th>
              <td>{hr_name}</td>
            </tr>

            <tr>
              <th>Description</th>
              <td colSpan={4}>{description}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary my-5">Apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
