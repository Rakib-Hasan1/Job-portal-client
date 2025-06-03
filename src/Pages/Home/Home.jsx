import React, { Suspense } from "react";
import Hero from "./Hero";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("https://job-portal-server-hazel-omega.vercel.app/jobs").then((res) =>
    res.json()
  );
  return (
    <div>
      <Suspense
        fallback={<p className="text-center">jobs are loading......</p>}
      >
        <Hero jobsPromise={jobsPromise}></Hero>
      </Suspense>
      <Suspense
        fallback={<p className="text-center">jobs are loading......</p>}
      >
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
