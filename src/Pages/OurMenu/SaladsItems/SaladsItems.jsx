import { useEffect, useState } from "react";
import SaladItem from "./SaladItem";
import { Link } from "react-router-dom";
import useInterceptors from "../../../Hooks/useInterceptors";

const SaladsItems = () => {
    const [saladCategory, setSaladCategory] = useState('')

    const [menu, setMenu] = useState([])
    const axiosInstance = useInterceptors()

    useEffect(() => {
        const getMenus = async () => {
            const { data } = await axiosInstance.get('/menus')
            setMenu(data)
        }
        getMenus()
    }, [axiosInstance])

    const salads = menu.filter(item => item.category === "salad")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    salads.map(salad => <SaladItem key={salad._id} salad={salad} setSaladCategory={setSaladCategory}></SaladItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/ourShop/${saladCategory}`}>
                    <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVORITE SALAD</button>
                </Link>
            </div>
        </div>
    );
};

export default SaladsItems;