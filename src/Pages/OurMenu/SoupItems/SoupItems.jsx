import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import SoupItem from "./SoupItem";
import { Link } from "react-router-dom";


const SoupItems = () => {
    const [soupCategory, setSoupCategory] = useState('')

    const [menu] = useMenu()
    const soups = menu.filter(item => item.category === "soup")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    soups.map(soup => <SoupItem key={soup._id} soup={soup} setSoupCategory={setSoupCategory}></SoupItem>)
                }
            </div>
            <div className="text-center pb-5">
                <Link to={`/ourShop/${soupCategory}`}>
                    <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default SoupItems;