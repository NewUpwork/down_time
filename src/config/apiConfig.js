// const apiBaseUrl = 'https://downtime-endpoints-65f5397a1113.herokuapp.com';
const apiBaseUrl = 'http://localhost:5000'

export const apiEndpoints = {
  login: `${apiBaseUrl}/login`,
  users:`${apiBaseUrl}/users`,
  recover: `${apiBaseUrl}/recover-password`,
  logout:`${apiBaseUrl}/logout`,
  feed:`${apiBaseUrl}/jobs-feed`,
  applyJob:`${apiBaseUrl}/apply-job`,
  freelancers: `${apiBaseUrl}/freelancers`,
  appliedJobs: `${apiBaseUrl}/applied-jobs/:userId`,
  jobPost:`${apiBaseUrl}/post-job`,
  oneJob: `${apiBaseUrl}/get-one-job/:jobId`,
  oneFreelancer: `${apiBaseUrl}/get-one-freelancer/:freelancerId`,
};
