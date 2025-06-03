import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth";
import UseApplicationApi from "../../Api/UseApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();

  const { myApplicationsPromise } = UseApplicationApi();

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={<p className="text-3xl text-center my-5">Applications are loading ...</p>}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
