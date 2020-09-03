import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // This will make sure its sent with every request
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
