
// import { error } from 'console';
// import { getAll } from './api/SachApi';
import './App.css';
import Footer from './layouts/Footer';
import HomePage from './layouts/HomePage';
import Navbar from './layouts/Navbar';
// import List from './layouts/products/ListBook';

function App() {
  // getAll().then().catch();
  return (
    <div className="">
      <nav >
        <Navbar />
        <HomePage />
        {/* <List /> */}
        <Footer />
      </nav>
    </div>
  );
}

export default App;
