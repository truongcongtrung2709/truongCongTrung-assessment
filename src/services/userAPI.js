import fetcher from "./fetcher";

const userAPI = {
  getUser: () => {
    return fetcher.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  updateUser: (values) => {
    return fetcher.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      ...values,
      maNhom: "GP00",
    });
  },
};

export default userAPI;
