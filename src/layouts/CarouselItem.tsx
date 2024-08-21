import React, { useEffect, useState } from "react";
// import Book from "../../models/Book";
import SachModel from "../models/SachModoel";
import HinhAnhModel from "../models/HinhAnhModel";
import { getAllImage, lay1AnhCua1Sach } from "../api/HinhAnhAPI";


interface CarouselItemInterface {
    sach: SachModel
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {

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

    return (
        <div className="row align-items-center">
            <div className="col-5 text-center">
                <img src={avatar} alt="..." style={{ width: '150px' }} />
            </div>
            <div className="col-7">
                <h5>{props.sach.tenSach}</h5>
                <p>{props.sach.moTa}</p>
            </div>
        </div>
    )
}

export default CarouselItem;