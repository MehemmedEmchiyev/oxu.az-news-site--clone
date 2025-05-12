import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import { Routes, Route, useLocation } from "react-router";
import './style/style.css'
import NewsDetail from './pages/NewsDetail';
import { useEffect, useState } from 'react';
import LoginRegisterPage from './pages/LoginRegisterPage';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer, toast } from 'react-toastify';
import User from './components/User';
import { useDispatch , useSelector} from 'react-redux'
import NewsPage from './pages/NewsPage';

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  
  return (
    <div className=''>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ScrollToTop />
      <Header />
      <SideBar />
      <div className={"mt-33"}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<NewsDetail />} />
          <Route path='/auth' element={<LoginRegisterPage />}>
            <Route path='' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='user' element={<User />} />
          </Route>
          <Route path='/news/:value' element={<NewsPage />} />

        </Routes>
      </div>
      <Footer />
    </div>
  )

}
export default App
