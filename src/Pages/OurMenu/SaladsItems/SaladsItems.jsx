import useMenu from "../../../Hooks/useMenu";
import SaladItem from "./SaladItem";

const SaladsItems = () => {
    const [menu] = useMenu()
    const salads = menu.filter(item => item.category === "salad")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    salads.map(salad => <SaladItem key={salad._id} salad={salad}></SaladItem>)
                }
            </div>
            <div className="text-center">
                <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default SaladsItems;