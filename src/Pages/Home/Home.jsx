import Banner from "../Banner/Banner";
import BistroService from "../BistroService/BistroService";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroService></BistroService>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;