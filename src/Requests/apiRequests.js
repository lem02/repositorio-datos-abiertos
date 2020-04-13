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
    axios
      .get(`${MAIN_URL}${path}`, options)
      .then((res) => {
        callback(res.data);
      })
      .catch(console.log);
  },
  post: (path, data, callback) => {
    axios
      .post(`${MAIN_URL}/${path}`, options, data)
      .then((res) => {
        callback(res.data);
      })
      .catch(console.log);
  },
};

export default Request;
