import React, { useEffect, useState } from "react";
// import Book from "../../models/Book";

import HinhAnhModel from "../../models/HinhAnhModel";
import { getAllImage, lay1AnhCua1Sach } from "../../api/HinhAnhAPI";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";


interface HinhAnhSanPham {
    maSach: number
}

const HinhAnhSanPham: React.FC<HinhAnhSanPham> = (props) => {

    const maSach: number = props.maSach;


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
    // console.log(danhSachAnh[0]);

    return (
        <div className="row">
            <div className="col-12">
                <Carousel showArrows={true} showIndicators={true}>
                    {
                        danhSachAnh.map((hinhanh, index) => (
                            <div key={index}>
                                <img src={hinhanh.duLieuAnh} alt={`${hinhanh.tenHinhAnh}`} style={{ maxWidth: '250px' }} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default HinhAnhSanPham;