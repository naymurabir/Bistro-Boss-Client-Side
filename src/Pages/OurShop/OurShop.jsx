import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import ourShopImg from '../../assets/shop/ourShopBanner.jpg'
import TabItems from './TabItems';


const OurShop = () => {

    return (
        <div>
            <div>
                <Helmet>
                    <title>
                        Bistro Boss | Our Shop
                    </title>
                </Helmet>

                <Cover img={ourShopImg} title={"OUR SHOP"} description={"Would you like to try a dish?."}></Cover>
            </div>

            <TabItems></TabItems>
        </div>
    );
};

export default OurShop;