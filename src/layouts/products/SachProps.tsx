import React, { useEffect, useState } from "react";
// import Book from "../../models/Book";
import SachModel from "../../models/SachModoel";
import HinhAnhModel from "../../models/HinhAnhModel";
import { getAllImage } from "../../api/HinhAnhAPI";
import { log } from "console";

interface SachInterface {
    sach: SachModel
}

const SachProps: React.FC<SachInterface> = (props) => {

    const maSach: number = props.sach.maSach;


    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);

    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);

    const [loi, setError] = useState(null);

    useEffect(() => {
        getAllImage(maSach).then(
            AnhData => {
                setDanhSachAnh(AnhData);
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
    console.log(danhSachAnh[0]);


    return (
        <div className="col-md-3 mt-2">


            <div className="card">
                {/* Anh */}
                <img
                    src={`${danhSachAnh[0].duLieuAnh}`} //Chỉ nhận ảnh JPG
                    className="card-img-top"
                    alt={props.sach.tenSach} style={{ height: '200px' }} />


                <div className="card-body">
                    <h5 className="card-title">{props.sach.tenTacGia}</h5>
                    <p className="card-text">{props.sach.moTa}</p>
                    {/* Gia */}
                    <div className="price">
                        <span className="original-price">
                            <del>{props.sach.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.sach.giaBan}</strong>
                        </span>
                    </div>
                    {/* Nut nhan mua hang, thich san pham */}
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SachProps;