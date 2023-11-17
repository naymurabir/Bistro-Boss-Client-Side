import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaRegStar, FaRegBookmark, FaSearch, FaPhone } from "react-icons/fa";
import useCarts from "../Hooks/useCarts";

const Dashboard = () => {

    const { carts } = useCarts()

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20  flex gap-10">
            <div className="lg:w-[20%] min-h-screen bg-[#D1A054]">
                <ul className="menu px-4 py-2">

                    <li className="font-bold"> <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink> </li>

                    <li className="font-bold"> <NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar> Reservation </NavLink> </li>

                    <li className="font-bold"> <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart ({carts.length})</NavLink> </li>

                    <li className="font-bold"> <NavLink to="/dashboard/review"> <FaRegStar></FaRegStar>Add Review</NavLink> </li>

                    <li className="font-bold"> <NavLink to="/dashboard/bookings"> <FaRegBookmark></FaRegBookmark>My Bookings</NavLink> </li>

                    <div className="divider"></div>

                    <li className="font-bold"> <NavLink to="/"> <FaHome></FaHome>Home</NavLink> </li>

                    <li> <NavLink to="/ourMenu"> <FaSearch></FaSearch>Menu</NavLink> </li>

                    <li className="font-bold"> <NavLink to="/ourShop/salad"> <FaShoppingCart></FaShoppingCart> Order</NavLink> </li>

                    <li className="font-bold"> <NavLink to="/contact"> <FaPhone></FaPhone> Contact</NavLink> </li>

                </ul>
            </div>

            <div className="lg:w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;