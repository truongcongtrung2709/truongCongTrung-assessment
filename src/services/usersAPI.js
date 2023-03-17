import fetcher from "./fetcher";

const usersAPI ={
    signin:(values) => {
        return fetcher.post("QuanLyNguoiDung/DangNhap", values)
    },
    update:(user)=>{
        return fetcher.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', {
            ...user,
            maNhom: "GP00",
        })
    }
}
export default usersAPI;