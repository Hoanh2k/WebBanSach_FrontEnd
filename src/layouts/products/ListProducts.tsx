import React, { useEffect, useState } from "react";
import SachModel from "../../models/SachModoel";
import SachProps from "./SachProps";
import { getAll, timKiemSach } from "../../api/SachApi";
import { PhanTrang } from "../utils/PhanTrang";

interface DanhSachSanPhamProp {
    maTheLoai: number;
    tuKhoaTimKiem: string;

}

function DanhSachSanPham({ tuKhoaTimKiem, maTheLoai }: DanhSachSanPhamProp) {

    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);

    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);

    const [loi, setError] = useState(null);

    const [trangHienTai, setTrangHienTai] = useState(1);

    const [tongSoTrang, setTongSoTrang] = useState(0);

    const [tongSoSach, setTongSoSach] = useState(0);

    useEffect(() => {

        if (tuKhoaTimKiem === '' && maTheLoai === 0) {
            getAll(trangHienTai - 1).then(
                sachData => {
                    setDanhSachQuyenSach(sachData.ketQua);
                    setTongSoTrang(sachData.tongSoTrang);
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setError(error.message);
                }
            );
        } else {
            timKiemSach(tuKhoaTimKiem, maTheLoai).then(
                sachData => {
                    setDanhSachQuyenSach(sachData.ketQua);
                    setTongSoTrang(sachData.tongSoTrang);
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setError(error.message);
                }
            );
        }
    }, [trangHienTai, tuKhoaTimKiem, maTheLoai])

    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        )
    }

    if (loi) {
        return (
            <div>
                <h3>Gap loi : {loi}</h3>
            </div>
        )
    }

    const phantrang = (trang: number) => {
        setTrangHienTai(trang)
    }


    if (danhSachQuyenSach.length === 0) {
        return (
            <div className="container text-center">
                <div className="row mt-4 mb-4">
                    <h3>Không tìm thấy sách phù hợp</h3>
                </div>


            </div>
        )
    }

    return (


        <div className="container">
            <div className="row mt-4 mb-4">
                {
                    danhSachQuyenSach.map(sach => (
                        <SachProps key={sach.maSach} sach={sach} />
                    ))
                }

            </div>
            <PhanTrang tongSoTrang={tongSoTrang} trangHienTai={trangHienTai} phanTrang={phantrang} />

        </div>
    )

}

export default DanhSachSanPham;