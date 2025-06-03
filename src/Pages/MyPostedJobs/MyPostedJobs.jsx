import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import JobsList from "./JobsList";
import UseJobsApi from "../../Api/UseJobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const { jobsCreatedByPromise } = UseJobsApi();

  return (
    <div>
      <Suspense>
        <JobsList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobsList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
