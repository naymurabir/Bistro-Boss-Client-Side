import { createBrowserRouter } from 'react-router-dom';

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ContactUs from '../Pages/ContactUs/ContactUs';
import OurMenu from '../Pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/UserPanel/Cart';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import AllUsers from '../Pages/Dashboard/AdminPanel/AllUsers';
import ManageBookings from '../Pages/Dashboard/AdminPanel/ManageBookings';
import ManageItems from '../Pages/Dashboard/AdminPanel/ManageItems';
import AddItems from '../Pages/Dashboard/AdminPanel/AddItems';
import AdminHome from '../Pages/Dashboard/AdminPanel/AdminHome';


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
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/manageBookings',
                element: <ManageBookings></ManageBookings>
            },
            {
                path: '/dashboard/manageItems',
                element: <ManageItems></ManageItems>
            },
            {
                path: '/dashboard/addItems',
                element: <AddItems></AddItems>
            },
            {
                path: '/dashboard/adminHome',
                element: <AdminHome></AdminHome>
            }
        ]
    }
])

export default router