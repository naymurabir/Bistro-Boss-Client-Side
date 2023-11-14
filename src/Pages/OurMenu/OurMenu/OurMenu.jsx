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
import drinksImg from '../../../assets/menu/banner3.jpg'
import PizzaItems from '../PizzaItems/PizzaItems';
import SaladsItems from '../SaladsItems/SaladsItems';
import SoupItems from '../SoupItems/SoupItems';
import DrinksItems from '../DrinksItems/DrinksItems';


const OurMenu = () => {

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>

            <Cover img={menuImg} title={"Our Menu"} description={"Would you like to try a dish?."}></Cover>

            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}>
            </SectionTitle>

            {/* Salads Item */}
            <MenuCategory menuCoverImg={saladImg} title={"Salads"} description={"Our Salad items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <SaladsItems></SaladsItems>

            {/* Pizza Item */}
            <MenuCategory menuCoverImg={pizzaImg} title={"Pizza"} description={"Our pizza items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <PizzaItems></PizzaItems>

            {/* Soup Item */}
            <MenuCategory menuCoverImg={soupImg} title={"Soup"} description={"Our Soup items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <SoupItems></SoupItems>

            {/* Desserts Item */}
            <MenuCategory menuCoverImg={desertImg} title={"DESSERTS"} description={"Our dessert items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <Desserts></Desserts>

            {/* Drinks Item */}
            <MenuCategory menuCoverImg={drinksImg} title={"Drinks"} description={"Our Drinks items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
            <DrinksItems></DrinksItems>
        </div>
    );
};

export default OurMenu;