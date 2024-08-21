
// import { error } from 'console';
// import { getAll } from './api/SachApi';
import { useState } from 'react';
import './App.css';
import Footer from './layouts/Footer';
import HomePage from './layouts/HomePage';
import Navbar from './layouts/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layouts/About';
import ChiTietSanPham from './layouts/products/ChiTietSanPham';
// import List from './layouts/products/ListBook';

function App() {
  // getAll().then().catch();
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState('');
  return (
    <div className="">
      <BrowserRouter>
        <Navbar tuKhoaTimKiem={tuKhoaTimKiem} setTuKhoaTimKiem={setTuKhoaTimKiem} />
        <Routes>
          <Route path='/' element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} />} />
          <Route path='/:maTheLoai' element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} />} />
          <Route path='/about' element={<About />} />
          <Route path='/sach/:maSach' element={<ChiTietSanPham />} />

        </Routes>


        {/* <List /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
