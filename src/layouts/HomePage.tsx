import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import DanhSachSanPham from "./products/ListProducts";
import { useParams } from "react-router-dom";

interface HomePageProp {
    tuKhoaTimKiem: string;
}

function HomePage({ tuKhoaTimKiem }: HomePageProp) {

    const { maTheLoai } = useParams();

    let maTheLoaiNumber = 0;

    try {
        maTheLoaiNumber = parseInt(maTheLoai + '');
    } catch (error) {
        maTheLoaiNumber = 0;
        console.log(error);
    }

    if (Number.isNaN(maTheLoaiNumber)) {
        maTheLoaiNumber = 0
    }


    return (
        <div>
            <Banner />
            <Carousel />
            <DanhSachSanPham tuKhoaTimKiem={tuKhoaTimKiem} maTheLoai={maTheLoaiNumber} />
        </div>
    )
}

export default HomePage;