import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    category,
    salaryRange,
    description,
    company_logo,
    requirements,
  } = job;
  return (
    <div className="card bg-blue-50 border border-gray-300">
      <div className="flex items-center gap-4 p-6">
        <figure>
          <img
            src={company_logo}
            alt="company_logo"
            className="w-20 h-20 object-cover"
          />
        </figure>
        <div className="flex-1">
          <h2 className="card-title">{title}</h2>
          <h2 className="flex items-center gap-1 text-gray-600">
            <span>
              <CiLocationOn size={20} />
            </span>
            {location}
          </h2>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>
          Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements.map((skill, index) => (
            <div key={index} className="badge bg-blue-200 border-none">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-2">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
