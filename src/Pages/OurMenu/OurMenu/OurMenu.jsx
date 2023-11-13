import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import desertImg from '../../../assets/home/chef-service.jpg'


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

            <MenuCategory menuCoverImg={desertImg} menuTitle={"DESSERTS"} menuDescription={"Our dessert items are always best to the customers. Their ratings are always awesome. We always try to improve the taste quality of our food items."} ></MenuCategory>
        </div>
    );
};

export default OurMenu;