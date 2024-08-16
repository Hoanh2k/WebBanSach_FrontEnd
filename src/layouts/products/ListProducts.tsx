import React, { useEffect, useState } from "react";
import SachModel from "../../models/SachModoel";
import SachProps from "./SachProps";
import { getAll } from "../../api/SachApi";

const DanhSachSanPham: React.FC = () => {

    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);

    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);

    const [loi, setError] = useState(null);

    useEffect(() => {
        getAll().then(
            sachData => {
                setDanhSachQuyenSach(sachData);
                setDangTaiDuLieu(false);
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


    return (


        <div className="container">
            <div className="row mt-4">
                {
                    danhSachQuyenSach.map(sach => (
                        <SachProps key={sach.maSach} sach={sach} />
                    ))
                }

                {/* <img src={require('./../../../public/../public/image')} alt="" /> */}
            </div>
        </div>
    )

}

export default DanhSachSanPham;