// apiConfig.js

const apiBaseUrl = 'http://localhost:5000';
//'https://downtime-endpoints-65f5397a1113.herokuapp.com';

export const apiEndpoints = {
  login: `${apiBaseUrl}/login`,
  users:`${apiBaseUrl}/users`,
  recover: `${apiBaseUrl}/recover-password`,
  logout:`${apiBaseUrl}/logout`,
  feed:`${apiBaseUrl}/jobs-feed`,
  applyJob:`${apiBaseUrl}/apply-job`,

};
