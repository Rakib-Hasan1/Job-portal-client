export const jobsCreatedByPromise = (email, accessToken) => {
    return fetch(`https://job-portal-server-hazel-omega.vercel.app/jobs/applications?email=${email}`, {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json());
}