import HinhAnhModel from "../models/HinhAnhModel";
import { my_request } from "./Request";



export async function getAllImage(maSach: number): Promise<HinhAnhModel[]> {
    const result: HinhAnhModel[] = [];

    const url: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;

    const response = await my_request(url);

    // console.log(response);


    const responseData = response._embedded.hinhAnhs;
    // console.log(responseData);

    for (const key in responseData) {
        result.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            laIcon: responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh
        })
    }

    return result;
}