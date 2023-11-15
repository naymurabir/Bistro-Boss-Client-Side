import { createBrowserRouter } from 'react-router-dom';

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from '../Pages/ContactUs/ContactUs';
import DashBoard from '../Pages/DashBoard/DashBoard';
import OurMenu from '../Pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/OurShop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router