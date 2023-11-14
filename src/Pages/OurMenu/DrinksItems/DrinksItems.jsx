import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInterceptors from "../../../Hooks/useInterceptors";
import DrinksItem from "./DrinksItem";


const DrinksItems = () => {

    const [drinksCategory, setDrinksCategory] = useState('')

    const [menu, setMenu] = useState([])
    const axiosInstance = useInterceptors()

    useEffect(() => {
        const getMenus = async () => {
            const { data } = await axiosInstance.get('/menus')
            setMenu(data)
        }
        getMenus()
    }, [axiosInstance])

    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    drinks.map(drink => <DrinksItem key={drink._id} drink={drink} setDrinksCategory={setDrinksCategory}></DrinksItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/ourShop/${drinksCategory}`}>
                    <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVORITE DRINKS</button>
                </Link>
            </div>
        </div>
    );
};

export default DrinksItems;