import { useEffect, useState } from "react";
import SoupItem from "./SoupItem";
import { Link } from "react-router-dom";
import useInterceptors from "../../../Hooks/useInterceptors";


const SoupItems = () => {
    const [soupCategory, setSoupCategory] = useState('')

    const [menu, setMenu] = useState([])
    const axiosInstance = useInterceptors()

    useEffect(() => {
        const getMenus = async () => {
            const { data } = await axiosInstance.get('/menus')
            setMenu(data)
        }
        getMenus()
    }, [axiosInstance])

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
                    <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVORITE SOUP</button>
                </Link>
            </div>
        </div>
    );
};

export default SoupItems;