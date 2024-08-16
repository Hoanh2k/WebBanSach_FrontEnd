import React from "react";

function Carousel() {
    return (
        <div className="container">
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000" >
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
            </div>
        </div>
    )
}
export default Carousel;