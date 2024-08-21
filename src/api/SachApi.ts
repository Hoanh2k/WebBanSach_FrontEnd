// import React from "react";
import { log } from "console";
import SachModel from "../models/SachModoel";
import { my_request } from "./Request";


interface KetQuaInterface {
    ketQua: SachModel[];
    tongSoTrang: number;
    tongSoSach: number;
}


async function laySach(duongDan: string): Promise<KetQuaInterface> {
    const result: SachModel[] = [];

    //goi request
    const response = await my_request(duongDan);

    // console.log(response);

    //lay ra danh sach
    const responseData = response._embedded.saches;
    // console.log(responseData);

    //lay ra tong so trang
    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;

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

    return { ketQua: result, tongSoSach: tongSoSach, tongSoTrang: tongSoTrang };
}

export async function getAll(trangHienTai: number): Promise<KetQuaInterface> {
    const url: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=${trangHienTai}`;


    return laySach(url);
}

export async function lay3QuyenSachMoi(): Promise<KetQuaInterface> {
    const url: string = `http://localhost:8080/sach?sort=maSach,desc&page=0&size=8`;


    return laySach(url);
}

export async function timKiemSach(tuKhoaTimKiem: string, maTheLoai: number): Promise<KetQuaInterface> {
    let url: string = `http://localhost:8080/sach/search/findByTenSachContaining?page=0&size=8,sort=maSach,desc`;
    if (tuKhoaTimKiem !== '' && maTheLoai === 0) {
        url = `http://localhost:8080/sach/search/findByTenSachContaining?tenSach=${tuKhoaTimKiem}&page=0&size=8,sort=maSach,desc`;
    } else if (tuKhoaTimKiem === '' && maTheLoai !== 0) {
        url = `http://localhost:8080/sach/search/findByDanhSachTheLoai_MaTheLoai?maTheLoai=${maTheLoai}&page=0&size=8,sort=maSach,desc`;
    } else if (tuKhoaTimKiem !== '' && maTheLoai !== 0) {
        url = `http://localhost:8080/sach/search/findByTenSachContainingAndDanhSachTheLoai_MaTheLoai?maTheLoai=${maTheLoai}&tenSach=${tuKhoaTimKiem}&page=0&size=8,sort=maSach,desc`;
    }
    return laySach(url);
}

export async function laySachTheoMa(maSach: number): Promise<SachModel | null> {
    let result: SachModel;

    const url = `http://localhost:8080/sach/${maSach}`;

    try {
        //goi request
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Gap loi");
        }
        // console.log(response);

        const sachData = await response.json();

        if (sachData) {
            return {
                maSach: sachData.maSach,
                tenSach: sachData.tenSach,
                giaBan: sachData.giaBan,
                giaNiemYet: sachData.giaNiemYet,
                moTa: sachData.moTa,
                soLuong: sachData.soLuong,
                tenTacGia: sachData.tenTacGia,
                trungBinhXepHang: sachData.trungBinhXepHang,
            }

        } else {
            throw new Error("Sach khong ton tai")
        }

    } catch (error) {
        console.log(error);

        return null;
    }
}