import { useEffect, useState } from "react";
import PizzaItem from "./PizzaItem";
import { Link } from "react-router-dom";
import useInterceptors from "../../../Hooks/useInterceptors";

const PizzaItems = () => {

    const [pizzaCategory, setPizzaCategory] = useState('')

    const [menu, setMenu] = useState([])
    const axiosInstance = useInterceptors()

    useEffect(() => {
        const getMenus = async () => {
            const { data } = await axiosInstance.get('/menus')
            setMenu(data)
        }
        getMenus()
    }, [axiosInstance])

    const pizzas = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    pizzas.map(pizza => <PizzaItem key={pizza._id} pizza={pizza} setPizzaCategory={setPizzaCategory}></PizzaItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/ourShop/${pizzaCategory}`}>
                    <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVORITE PIZZA</button>
                </Link>
            </div>
        </div>
    );
};

export default PizzaItems;