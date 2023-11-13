
const SaladItem = ({ salad }) => {

    const { price, recipe, name, image } = salad

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

                <div className="flex flex-col lg:flex-row  gap-4">

                    <img style={{ borderRadius: '0 150px 150px 150px' }} className="w-full lg:w-[70px] lg:h-[80px] rounded-md" src={image} alt="" />


                    <div>
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-sm font-semibold mt-1">{recipe}</p>
                    </div>
                    <h3 className="text-[#D99904] mb-2 font-semibold">${price}</h3>

                </div>
            </div>
        </div>
    );
};

export default SaladItem;