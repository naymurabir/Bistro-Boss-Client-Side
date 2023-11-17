import { createBrowserRouter } from 'react-router-dom';

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from '../Pages/ContactUs/ContactUs';
import OurMenu from '../Pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';


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
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            }
        ]
    }
])

export default router