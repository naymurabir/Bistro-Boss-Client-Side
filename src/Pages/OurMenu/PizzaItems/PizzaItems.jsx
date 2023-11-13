import useMenu from "../../../Hooks/useMenu";
import PizzaItem from "./PizzaItem";

const PizzaItems = () => {

    const [menu] = useMenu()
    const pizzas = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    pizzas.map(pizza => <PizzaItem key={pizza._id} pizza={pizza}></PizzaItem>)
                }
            </div>
            <div className="text-center">
                <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default PizzaItems;