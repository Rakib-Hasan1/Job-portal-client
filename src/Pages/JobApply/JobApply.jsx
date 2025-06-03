import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();


  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const description = form.description.value;

    const application = {
      name,
      jobId,
      email: user.email,
      number,
      description,
    };

    // insert data to db using axios

    axios
      .post("https://job-portal-server-hazel-omega.vercel.app/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-6/12 mx-auto my-10">
      <p className="text-center">
        <span className="font-semibold text-indigo-600 bg-indigo-200 px-3 py-1 rounded-md">
          Job Application
        </span>
      </p>
      <h3 className="font-semibold text-4xl text-center my-3">
        Start Your Career Today
      </h3>
      <p className="text-center">
        Please fill in your information and send it to the employer.
      </p>

      <form
        onSubmit={handleApply}
        className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-5"
      >
        <label className="label">Full Name *</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Rakib Hasan"
        />

        <label className="label">Contact Number *</label>
        <input
          type="number"
          name="number"
          className="input w-full"
          placeholder="+8801776073928"
        />

        <label className="label">Description</label>
        <input
          type="text"
          name="description"
          className="input w-full"
          placeholder="Your Description ........."
        />

        <label className="label">Upload Resume</label>
        <input
          type="file"
          name="resume"
          className="file-input file-input-ghost"
        />

        <label className="label my-2">
          <input type="checkbox" name="terms" className="checkbox" />
          Agree Our Terms and Policy
        </label>

        <input type="submit" className="btn btn-primary" value="Apply Job" />
      </form>

      <Link to={`/jobs/${jobId}`}>
        <button className="btn btn-primary">Back to Job Details</button>
      </Link>
    </div>
  );
};

export default JobApply;
