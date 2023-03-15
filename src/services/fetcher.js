import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://reqres.in/api",
});
//interceptor
fetcher.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);
export default fetcher;
