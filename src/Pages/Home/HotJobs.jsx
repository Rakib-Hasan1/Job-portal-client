// import React, { use, useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { use } from "react";

const HotJobs = ({jobsPromise}) => {
const jobs = use(jobsPromise);

  return (
    <div>
        <h2 className="font-bold text-4xl text-center my-7">Hot Jobs For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
