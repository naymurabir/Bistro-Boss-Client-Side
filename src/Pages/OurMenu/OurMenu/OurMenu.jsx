import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Desserts from '../Desserts/Desserts';
import desertImg from '../../../assets/home/chef-service.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/salad-bg.jpg'
import PizzaItems from '../PizzaItems/PizzaItems';
import SaladsItems from '../SaladsItems/SaladsItems';
import SoupItems from '../SoupItems/SoupItems';


const OurMenu = () => {



    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>

            <Cover img={menuImg}></Cover>

            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}>
            </SectionTitle>

            {/* Desserts Item */}
            <MenuCategory menuCoverImg={desertImg} menuTitle={"DESSERTS"} menuDescription={"Our dessert items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <Desserts></Desserts>

            {/* Pizza Item */}
            <MenuCategory menuCoverImg={pizzaImg} menuTitle={"Pizza"} menuDescription={"Our pizza items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <PizzaItems></PizzaItems>

            {/* Salads Item */}
            <MenuCategory menuCoverImg={saladImg} menuTitle={"Salads"} menuDescription={"Our Salad items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <SaladsItems></SaladsItems>

            {/* Soup Item */}

            <MenuCategory menuCoverImg={soupImg} menuTitle={"Soup"} menuDescription={"Our Soup items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <SoupItems></SoupItems>
        </div>
    );
};

export default OurMenu;