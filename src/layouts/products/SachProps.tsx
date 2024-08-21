import React, { useEffect, useState } from "react";
// import Book from "../../models/Book";
import SachModel from "../../models/SachModoel";
import HinhAnhModel from "../../models/HinhAnhModel";
import { getAllImage, lay1AnhCua1Sach } from "../../api/HinhAnhAPI";
import { Link } from "react-router-dom";
import { Heart } from "react-bootstrap-icons";
import renderRating from "../utils/StarRating";
import dinhDangSo from "../utils/DinhDanhSo";


interface SachInterface {
    sach: SachModel
}

const SachProps: React.FC<SachInterface> = (props) => {

    const maSach: number = props.sach.maSach;


    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);

    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);

    const [loi, setError] = useState(null);

    useEffect(() => {
        lay1AnhCua1Sach(maSach).then(
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
    // console.log(danhSachAnh[0]);

    let avatar: string = "";
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh) {
        avatar = danhSachAnh[0].duLieuAnh
    }

    console.log(props.sach.soLuong);


    return (
        <div className="col-md-3 mt-2">


            <div className="card">
                {/* Anh */}
                <Link to={`/sach/${props.sach.maSach}`}>
                    <img
                        src={avatar} //Chỉ nhận ảnh JPG
                        className="card-img-top"
                        alt={props.sach.tenSach} style={{ height: '200px' }} />

                </Link>
                <div className="card-body">

                    <h5 className="card-title">{props.sach.tenTacGia}</h5>
                    <p className="card-text">{props.sach.moTa}</p>
                    {/* Gia */}
                    <div className="price row">
                        <span className="original-price">
                            <del>${dinhDangSo(props.sach.giaNiemYet)}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>${dinhDangSo(props.sach.giaBan)}</strong>
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="col">
                        {renderRating(props.sach.trungBinhXepHang ? props.sach.trungBinhXepHang : 0)}
                    </div>
                    {/* Nut nhan mua hang, thich san pham */}
                    <div className="row mt-2" role="group">
                        <div className=" text-end">
                            <a href="#" className="btn btn-warning me-2">
                                <Heart style={{ color: 'white' }} />
                            </a>

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