import React, { useEffect, useState } from "react";
// import Book from "../../models/Book";
import SachModel from "../../models/SachModoel";
import HinhAnhModel from "../../models/HinhAnhModel";
import { getAllImage, lay1AnhCua1Sach } from "../../api/HinhAnhAPI";
import { Link, useParams } from "react-router-dom";
import { laySachTheoMa } from "../../api/SachApi";
import { error } from "console";
import HinhAnhSanPham from "./HinhAnhSanPham";
import DanhGiaSanPham from "./DanhGiaSanPham";
import renderRating from "../utils/StarRating";
import dinhDangSo from "../utils/DinhDanhSo";


const ChiTietSanPham: React.FC = () => {
    //lay ma sach tu url
    const { maSach } = useParams();

    let maSachNumber = 0;
    try {
        maSachNumber = parseInt(maSach + '');
        if (Number.isNaN(maSachNumber)) {
            maSachNumber = 0;
        }
    } catch (error) {
        maSachNumber = 0;
        console.log(error);

    }

    //Khai bao 
    const [sach, setSach] = useState<SachModel | null>(null);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [loi, setLoi] = useState(null);

    useEffect(() => {
        laySachTheoMa(maSachNumber)
            .then(
                (sach) => {
                    setSach(sach);
                    setDangTaiDuLieu(false)
                }
            )
            .catch(
                (error) => {
                    setLoi(error.message);
                    setDangTaiDuLieu(false);
                }
            )
    }, [maSach])

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

    if (!sach) {
        return (
            <div><h1>Sách không tồn tại</h1></div>
        )
    }
    return (
        <div className="container">

            <div className="row mt-5 mb-5">
                <div className="col-4">

                    <HinhAnhSanPham maSach={maSachNumber} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>  {sach.tenSach}</h1>
                            <h5>  {renderRating(sach.trungBinhXepHang ? sach.trungBinhXepHang : 0)}</h5>
                            <h4> {dinhDangSo(sach.giaBan)}</h4>
                            <hr />
                            <h3>Thong tin sach</h3>
                            <h4>{sach.moTa}</h4>
                        </div>
                        <div className="col-4">


                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-4">
                    <DanhGiaSanPham maSach={maSachNumber} />
                </div>
            </div>
        </div>
    )
}

export default ChiTietSanPham;