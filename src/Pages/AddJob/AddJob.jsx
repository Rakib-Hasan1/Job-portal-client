import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJOb = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salaryRange data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements data
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // process responsibilities data shorthand
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";

    // save job to the DB

    axios
      .post("https://job-portal-server-hazel-omega.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This new Job has been saved and published",
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
    <div className="my-8">
      <h2 className="font-bold text-3xl text-center my-4">Please Add a Job</h2>
      <form onSubmit={handleAddAJOb} className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job title"
            required
          />

          <label className="label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company name"
            required
          />

          <label className="label">Company location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company location"
            required
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company logo URL"
            required
          />

          <label className="label">Select job type</label>
          <select
            name="jobType"
            defaultValue="Select a job type"
            className="select w-full"
            required
          >
            <option disabled={true}>Select a job type</option>
            <option>On-Site</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>

          <label className="label">Select job category</label>
          <select
            name="category"
            defaultValue="Select a job category"
            className="select w-full"
            required
          >
            <option disabled={true}>Select a job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
            <option>Management</option>
            <option>Data Science</option>
            <option>Development</option>
            <option>Design</option>
          </select>

          <label className="label">Select application deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full"
            required
          />

          <label className="label">Input Salary Range</label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label className="label">Minimum salary</label>
              <input
                type="number"
                name="min"
                className="input w-full"
                placeholder="Minimum salary"
                required
              />
            </div>

            <div>
              <label className="label">Maximum salary</label>
              <input
                type="number"
                name="max"
                className="input w-full"
                placeholder="Maximum salary"
                required
              />
            </div>

            <div>
              <label className="label">Select currency</label>
              <select
                name="currency"
                defaultValue="Select a currency"
                className="select w-full"
                required
              >
                <option disabled={true}>Select a currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EUR</option>
                <option>AUD</option>
                <option>CAD</option>
                <option>CNY</option>
                <option>SGD</option>
                <option>SAR</option>
                <option>AED</option>
              </select>
            </div>
          </div>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR name"
            required
          />

          <label className="label">HR Email</label>
          <input
            defaultValue={user.email}
            type="email"
            name="hr_email"
            className="input w-full"
            placeholder="HR email"
            required
          />

          <label className="label">Requirements</label>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirements (separate by commas)"
            required
          ></textarea>

          <label className="label">Responsibilities</label>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Responsibilities (separate by commas)"
            required
          ></textarea>

          <label className="label">Description</label>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job description ..."
            required
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary my-5"
            value="Add Job"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
