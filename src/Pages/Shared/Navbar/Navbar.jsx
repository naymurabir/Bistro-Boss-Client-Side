import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <NavLink to="/" className="text-base mr-2 font-semibold"> Home</NavLink>
        <NavLink to="/contact" className="text-base mr-2 font-semibold"> Contact</NavLink>
        <NavLink to="/dashboard" className="text-base mr-2 font-semibold"> Dashboard</NavLink>
        <NavLink to="/ourMenu" className="text-base mr-2 font-semibold"> Our Menu</NavLink>
        <NavLink to="/ourShop" className="text-base mr-2 font-semibold"> Our Shop</NavLink>
    </>

    return (
        <nav className="">
            <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <a className="btn btn-ghost normal-case text-base  md:text-2xl">Bistro Boss</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline text-white">Explore</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;