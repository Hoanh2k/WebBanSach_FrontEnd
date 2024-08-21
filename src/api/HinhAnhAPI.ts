import HinhAnhModel from "../models/HinhAnhModel";
import { my_request } from "./Request";

async function layAnhCuaMotSach(duongDan: string): Promise<HinhAnhModel[]> {
    const result: HinhAnhModel[] = [];



    const response = await my_request(duongDan);

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


export async function getAllImage(maSach: number): Promise<HinhAnhModel[]> {
    const url: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;

    return layAnhCuaMotSach(url);
}

export async function lay1AnhCua1Sach(maSach: number): Promise<HinhAnhModel[]> {
    const url: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;

    return layAnhCuaMotSach(url);
}