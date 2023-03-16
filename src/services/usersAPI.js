import fetcher from "./fetcher";

const usersAPI ={
    signin:(values) => {
        return fetcher.post("https://reqres.in/api/login", values)
    }
}
export default usersAPI;