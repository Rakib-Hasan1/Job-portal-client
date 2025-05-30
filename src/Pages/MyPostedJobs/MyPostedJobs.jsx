import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobsList from './JobsList';
import { jobsCreatedByPromise } from '../../Api/JobsApi';

const MyPostedJobs = () => {

    const {user} = useAuth();

    return (
        <div>
            <Suspense>
                <JobsList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;