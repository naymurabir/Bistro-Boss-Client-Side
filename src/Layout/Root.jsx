import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {

    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login', 'register') || location.pathname.includes('register')

    return (
        <div className="">
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;