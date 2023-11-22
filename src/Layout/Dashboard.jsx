import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaRegStar, FaRegBookmark, FaSearch, FaPhone, FaRegAddressBook, FaUser, FaList } from "react-icons/fa";
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const { carts } = useCarts()

    const { isAdmin } = useAdmin()

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 ">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-[20%] min-h-screen bg-[#D1A054]">
                    <ul className="menu px-4 py-2">
                        {/* Admin Links */}
                        {
                            isAdmin ? <>
                                <li className="font-bold"> <NavLink to="/dashboard/adminHome"> <FaHome></FaHome> Admin Home</NavLink> </li>

                                <li className="font-bold"> <NavLink to="/dashboard/addItems"> <FaRegAddressBook></FaRegAddressBook> Add Items </NavLink> </li>

                                <li className="font-bold"> <NavLink to="/dashboard/manageItems"> <FaList></FaList> Manage Items</NavLink> </li>

                                <li className="font-bold"> <NavLink to="/dashboard/manageBookings"> <FaRegStar></FaRegStar>Manage Bookings</NavLink> </li>

                                <li className="font-bold"> <NavLink to="/dashboard/allUsers"> <FaUser></FaUser> All Users</NavLink> </li>
                            </>
                                :
                                <>
                                    {/* Users Links */}
                                    <li className="font-bold"> <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar> Reservation </NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/paymentHistory"> <FaCalendar></FaCalendar> Payment History </NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart ({carts.length})</NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/review"> <FaRegStar></FaRegStar>Add Review</NavLink> </li>

                                    <li className="font-bold"> <NavLink to="/dashboard/bookings"> <FaRegBookmark></FaRegBookmark>My Bookings</NavLink> </li>
                                </>
                        }

                        {/* Shared NavLinks */}
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

        </div>
    );
};

export default Dashboard;