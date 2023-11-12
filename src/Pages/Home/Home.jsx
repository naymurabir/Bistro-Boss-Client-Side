import Banner from "../Banner/Banner";
import BistroService from "../BistroService/BistroService";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
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