import MenuItem from "./MenuItem";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useInterceptors from "../../Hooks/useInterceptors";
import { useEffect, useState } from "react";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    const axiosInstance = useInterceptors()
    useEffect(() => {
        const getPopularMenus = async () => {
            const { data } = await axiosInstance.get('/menus')
            setMenu(data)
        }
        getPopularMenus()
    }, [axiosInstance])

    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}>
                </SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 my-5">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="text-center">
                <button className='btn btn-outline border-0 border-b-4 text-[#D99904]'>View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;