import React, { useEffect, useState } from "react";
import SachModel from "../models/SachModoel";
import SachProps from "./products/SachProps";
import { lay3QuyenSachMoi } from "../api/SachApi";
import { error } from "console";
import CarouselItem from "./CarouselItem";


const Carousel: React.FC = () => {



    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);

    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);

    const [loi, setError] = useState(null);

    useEffect(() => {
        lay3QuyenSachMoi().then(
            sachData => {
                setDanhSachQuyenSach(sachData.ketQua);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false);
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



    return (
        <div className="container">

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <CarouselItem key={0} sach={danhSachQuyenSach[0]} />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <CarouselItem key={1} sach={danhSachQuyenSach[1]} />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <CarouselItem key={2} sach={danhSachQuyenSach[2]} />
                    </div>
                </div>
                <button className="carousel-control-prev btn btn-gray-500" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-gray-500" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000"  >

                        <img src={'https://www.nxbtre.com.vn/Images/Editor/images/SACH%20MOI%20T3-2021_thieu%20nhi%203.jpg'} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={'https://www.nxbtre.com.vn/Images/Editor/images/SACH%20MOI%20T3-2021_thieu%20nhi%204.jpg'} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={'https://www.nxbtre.com.vn/Images/Editor/images/SACH%20MOI%20T3-2021_thieu%20nhi%205.jpg'} alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
        </div>
    )
}
export default Carousel;