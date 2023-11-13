import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import Dessert from "./Dessert";
import { Link } from "react-router-dom";

const Desserts = () => {

    const [dessertCategory, setDessertCategory] = useState('')

    const [menu] = useMenu()
    const dessertsMenu = menu.filter(item => item.category === "dessert")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    dessertsMenu.map(singleDessert => <Dessert key={singleDessert._id} singleDessert={singleDessert} setDessertCategory={setDessertCategory}></Dessert>)
                }
            </div>
            <div className="text-center">
                <Link to={`/ourShop/${dessertCategory}`}>
                    <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default Desserts;