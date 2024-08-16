import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import DanhSachSanPham from "./products/ListProducts";
function HomePage() {
    return (
        <div>
            <Banner />
            <Carousel />
            <DanhSachSanPham />
        </div>
    )
}

export default HomePage;