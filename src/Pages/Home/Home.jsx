import Banner from "../Banner/Banner";
import BistroService from "../BistroService/BistroService";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroService></BistroService>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;