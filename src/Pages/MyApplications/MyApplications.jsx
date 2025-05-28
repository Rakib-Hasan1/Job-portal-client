import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../Hooks/useAuth";
import { myApplicationPromise } from "../../Api/ApplicationApi";

const MyApplications = () => {

  const { user } = useAuth();

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={'Applications are loading ...'}>
        <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
