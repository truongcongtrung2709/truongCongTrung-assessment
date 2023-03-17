import fetcher from "./fetcher";

const authAPI = {
  signin: (values) => {
    return fetcher.post("/QuanLyNguoiDung/DangNhap", values);
  },
};
export default authAPI;
