
const Category = ({ item }) => {

    const { image, name, recipe, price } = item

    return (
        <div>
            <div>
                <div className="card card-compact shadow-md">
                    <img className="h-[200px] lg:h-[250px] w-full" src={image} alt="Recommends" />
                    <p className="absolute bg-slate-900 text-white right-0 px-2 py-1 mr-2 mt-2 rounded"> ${price}</p>
                    <div className="card-body text-center ">
                        <h2 className=" text-xl text-black font-semibold">{name}</h2>
                        <p className="text-black font-semibold">{recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="bg-gray-100 px-2 py-2 rounded text-[#BB8506] font-semibold border-b-2 border-[#BB8506] mb-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;