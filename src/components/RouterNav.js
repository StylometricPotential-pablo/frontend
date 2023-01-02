
import { Routes, Route, BrowserRouter } from "react-router-dom";


import Footer from "./Footer/Footer";
import Home from "./Home/Home";

/**
 * Router for the application - dynamically renders the correct screen
 */
const RouterNav = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="min-h-screen bg-[#B6EED3]">
                            <Home />
                        </div>
                    } />
                    <Route path="/analyze" element={
                        <div className="min-h-screen bg-[#B6EED3]">
                        </div>
                    } />
                    <Route path="/submit" element={
                        <div className="min-h-screen bg-[#B6EED3]">
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
            <Footer />

        </>
    );
};

export default RouterNav;
