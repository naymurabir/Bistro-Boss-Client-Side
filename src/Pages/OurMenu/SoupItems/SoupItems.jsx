import useMenu from "../../../Hooks/useMenu";
import SoupItem from "./SoupItem";


const SoupItems = () => {
    const [menu] = useMenu()
    const soups = menu.filter(item => item.category === "soup")

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-0 space-y-2 my-5">
                {
                    soups.map(soup => <SoupItem key={soup._id} soup={soup}></SoupItem>)
                }
            </div>
            <div className="text-center">
                <button className='btn btn-outline border-0 border-b-4 text-black'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default SoupItems;