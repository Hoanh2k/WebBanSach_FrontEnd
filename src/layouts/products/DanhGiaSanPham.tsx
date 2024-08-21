import React, { useEffect, useState } from "react";
// import Book from "../../models/Book";

import HinhAnhModel from "../../models/HinhAnhModel";
import { getAllImage, lay1AnhCua1Sach } from "../../api/HinhAnhAPI";
import { layToanBoDanhGiaCuaMotQuyenSach } from "../../api/DanhGiaAPI";
import DanhGiaModle from "../../models/DanhGiaModle";
import { Star, StarFill } from "react-bootstrap-icons";
import renderRating from "../utils/StarRating";


interface DanhGiaSanPham {
    maSach: number
}

const DanhGiaSanPham: React.FC<DanhGiaSanPham> = (props) => {

    const maSach: number = props.maSach;


    const [danhSachDanhGia, setDanhSachDanhGia] = useState<DanhGiaModle[]>([]);

    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);

    const [loi, setError] = useState(null);




    useEffect(() => {
        layToanBoDanhGiaCuaMotQuyenSach(maSach).then(
            danhSachDanhGia => {
                setDanhSachDanhGia(danhSachDanhGia);

                setDangTaiDuLieu(false);
                // console.log(danhSachAnh[0].duLieuAnh);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        );
    }, [])

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
    // console.log(danhSachAnh[0]);




    return (
        <div className="container">
            <h4>Đánh giá sản phẩm</h4>
            {
                danhSachDanhGia.map((danhGia, index) => (
                    <div className="row">
                        <div className="col-4">
                            <h5>{renderRating(danhGia.diemXepHang ? danhGia.diemXepHang : 0)}</h5>
                        </div>
                        <div className="col-4">
                            <h4>{danhGia.nhanXet}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DanhGiaSanPham;