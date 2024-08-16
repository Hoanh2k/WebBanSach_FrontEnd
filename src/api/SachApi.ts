// import React from "react";
import SachModel from "../models/SachModoel";
import { my_request } from "./Request";

export async function getAll(): Promise<SachModel[]> {
    const result: SachModel[] = [];

    const url: string = `http://localhost:8080/sach`;

    const response = await my_request(url);

    // console.log(response);


    const responseData = response._embedded.saches;
    // console.log(responseData);

    for (const key in responseData) {
        result.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang,

        })
    }

    return result;
}