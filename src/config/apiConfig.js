// apiConfig.js

//const apiBaseUrl = 'https://downtime-endpoints-65f5397a1113.herokuapp.com';

const apiBaseUrl = "http://localhost:5001";

export const apiEndpoints = {
  login: `${apiBaseUrl}/login`,
  register: `${apiBaseUrl}/users`,
};
