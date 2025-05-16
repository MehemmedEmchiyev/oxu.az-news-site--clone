import { Routes, Route, useLocation } from "react-router";
import '../style/style.css'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Home from "../pages/Home";
import NewsDetail from "../pages/NewsDetail";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import NewsPage from "../pages/NewsPage";
import Footer from "../components/Footer";
import NoNewsFound from "../components/NoNewsFound";

function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Routers() {

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
                    <Route path='*' element={<NoNewsFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default Routers
