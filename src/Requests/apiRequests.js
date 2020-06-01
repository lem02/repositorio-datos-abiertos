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
        if (res.status === 200 || res.status === 204) {
          callback({ data: res.data });
        } else {
          callback({ error: res.status });
        }
      })
      .catch(console.log);
  },
  post: (path, data, callback) => {
    axios
      .post(process.env.REACT_APP_API_URL + path, data, options)
      .then((res) => {
        if (res.status === 200 || res.status === 204) {
          callback({ data: res.data });
        } else {
          callback({ error: res.status });
        }
      })
      .catch(console.log);
  },
};

export default Request;
