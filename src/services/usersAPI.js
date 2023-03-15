import fetcher from "./fetcher";

const usersAPI = {
  getUsers: fetcher.get("https://reqres.in/api/users"),
};
export default usersAPI;
