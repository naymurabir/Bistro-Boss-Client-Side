import Banner from "../Banner/Banner";
import BistroService from "../BistroService/BistroService";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <BistroService></BistroService>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
            <FeaturedItems></FeaturedItems>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;