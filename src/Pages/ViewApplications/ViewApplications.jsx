import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  const { job_id } = useParams();

  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);

    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Application status updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>
        {applications.length} Application for : {job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Applicant Name</th>
              <th>Applicant Email</th>
              <th>Applicant Contact No.</th>
              <th>Applicant Status Update</th>
            </tr>
          </thead>

          <tbody>
            {/* rows */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.number}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
