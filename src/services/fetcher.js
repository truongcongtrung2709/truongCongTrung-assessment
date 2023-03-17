import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://reqres.in/api/users",
  Headers: {
    token: "QpwL5tke4Pnpja7X4",
  },
});
fetcher.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);
export default fetcher;
