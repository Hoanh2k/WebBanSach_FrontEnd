import React, { ChangeEvent, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";

interface NavbarProps {
  tuKhoaTimKiem: string;
  setTuKhoaTimKiem: (tuKhoa: string) => void;
}


function Navbar({ tuKhoaTimKiem, setTuKhoaTimKiem }: NavbarProps) {

  const [tuKhoaTamthoi, setTuKhoaTamThoi] = useState('');

  const onSeacrhInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTuKhoaTamThoi(e.target.value);
  }

  const handleSearch = () => setTuKhoaTimKiem(tuKhoaTamthoi)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Book-Store</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Trang chủ</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Thể loại
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/1">Loai 1</Link></li>
                  <li><Link className="dropdown-item" to="/2">Loai 2</Link></li>
                  <li><Link className="dropdown-item" to="/3">Loai 3</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Quy định bán hàng
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Liên hệ</a>
              </li>
            </ul>
            {/* Tìm kiêm */}
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onSeacrhInputChange} value={tuKhoaTamthoi} />
              <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
                <Search />
              </button>
            </div>
            {/* Shooping cart */}
            <ul className="navbar-nav me-1">
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-1">
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="fas fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;



// an vao la tim kiem
// const onSeacrhInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setTuKhoaTimKiem(e.target.value);
// }

// const handleSearch = () => setTuKhoaTimKiem(tuKhoaTimKiem)
// <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onSeacrhInputChange} value={tuKhoaTimKiem} />
// <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>




//Tim kiem khi an vao nut
// const [tuKhoaTamthoi, setTuKhoaTamThoi] = useState('');

// const onSeacrhInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setTuKhoaTamThoi(e.target.value);
// }

// const handleSearch = () => setTuKhoaTimKiem(tuKhoaTamthoi)


// <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onSeacrhInputChange} value={tuKhoaTamthoi} />
// <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>