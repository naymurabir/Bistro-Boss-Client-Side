import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])


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
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;