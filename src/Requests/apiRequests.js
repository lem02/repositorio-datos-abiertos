import axios from 'axios';

const MAIN_URL = 'http://localhost:3000';

export const options = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
};

const Request = {
  get: (path, callback) => {
    axios.get(`${MAIN_URL}${path}`, options).then(callback).catch(console.log);
  },
  post: (path, data, callback) => {
    axios
      .post(`${MAIN_URL}/${path}`, options, data)
      .then(callback)
      .catch(console.log);
  },
};

export default Request;
