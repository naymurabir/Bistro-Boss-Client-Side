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
import AdminRoute from '../Pages/PrivateRoute/AdminRoute';
import UpdateItem from '../Pages/Dashboard/AdminPanel/UpdateItem';
import Payment from '../Pages/Dashboard/UserPanel/Payment';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PaymentHistory from '../Pages/Dashboard/UserPanel/PaymentHistory';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            //Admin Routes
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/manageBookings',
                element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
            },
            {
                path: '/dashboard/manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: '/dashboard/updateItem/:id',
                element: <UpdateItem></UpdateItem>
            },
            {
                path: '/dashboard/adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            //Users Routes
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
])

export default router