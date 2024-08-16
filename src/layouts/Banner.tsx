import React from "react";
function Banner(){
    return(
        <div className="p-5 mb-4 bg-dark">
            <div className="container-fluid py-5 text-white d-flex justify-content-center alight-items-center">
                <div>
                    <h2 className="display-5 fw-bold">
                        Đọc sách là hộ chiếu <br/> CHo những cuộc phiêu lưu
                    </h2>
                    <p className="">Mary pope </p>
                    <button className="btn btn-primary float-end">Mua Sach ngay</button>
                </div>
            </div>
            
        </div>
    )
}

export default Banner;
