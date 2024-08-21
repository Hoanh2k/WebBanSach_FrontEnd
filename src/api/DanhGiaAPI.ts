import DanhGiaModle from "../models/DanhGiaModle";
import { my_request } from "./Request";

async function layDanhGiaCuaMotSach(duongDan: string): Promise<DanhGiaModle[]> {
    const result: DanhGiaModle[] = [];

    const response = await my_request(duongDan);


    const responseData = response._embedded.suDanhGias;
    console.log(responseData);

    for (const key in responseData) {
        result.push(
            {
                maDanhGia: responseData[key].maDanhGia,
                diemXepHang: responseData[key].diemXepHang,
                nhanXet: responseData[key].nhanXet,
            }

        );
    }

    return result;
}


export async function layToanBoDanhGiaCuaMotQuyenSach(maSach: number): Promise<DanhGiaModle[]> {
    const url: string = `http://localhost:8080/sach/${maSach}/danhSachSuDanhGia`;

    return layDanhGiaCuaMotSach(url);
}

export async function lay1AnhCua1Sach(maSach: number): Promise<DanhGiaModle[]> {
    const url: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;

    return layDanhGiaCuaMotSach(url);
}