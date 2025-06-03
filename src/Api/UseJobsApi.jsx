import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UseJobsApi = () => {
  const axiosSecure = useAxiosSecure();

  const jobsCreatedByPromise = (email) => {
    return axiosSecure
      .get(`/jobs/applications?email=${email}`)
      .then((res) => res.data);
  };
  return {
    jobsCreatedByPromise,
  };
};

export default UseJobsApi;
