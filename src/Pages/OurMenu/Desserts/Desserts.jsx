import useMenu from "../../../Hooks/useMenu";
import Dessert from "./Dessert";

const Desserts = () => {

    const [menu] = useMenu()
    const dessertsMenu = menu.filter(item => item.category === "dessert")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    dessertsMenu.map(singleDessert => <Dessert key={singleDessert._id} singleDessert={singleDessert}></Dessert>)
                }
            </div>
            <div className="text-center">
                <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Desserts;