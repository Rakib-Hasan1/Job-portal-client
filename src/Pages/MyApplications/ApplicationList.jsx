import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div>
      <h2 className="text-3xl">Jobs applied so far : {applications.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Company</th>
              <th>Name/Contact</th>
              <th>Show Details</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
