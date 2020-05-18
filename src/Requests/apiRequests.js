import axios from 'axios';

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
      .get(process.env.REACT_APP_API_URL + path, options)
      .then((res) => {
        callback(res.data);
      })
      .catch(console.log);
  },
  post: (path, data, callback) => {
    axios
      .post(process.env.REACT_APP_API_URL + path, data, options)
      .then((res) => {
        callback(res.data);
      })
      .catch(console.log);
  },
};

export default Request;
