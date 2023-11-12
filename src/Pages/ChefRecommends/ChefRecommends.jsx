import SectionTitle from "../Shared/SectionTitle/SectionTitle";

import recommends1 from '../../assets/home/slide1.jpg'
import recommends2 from '../../assets/home/slide2.jpg'
import recommends3 from '../../assets/home/slide3.jpg'

const ChefRecommends = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <div>
                <SectionTitle
                    subHeading={"---Should Try---"}
                    heading={"CHEF RECOMMENDS"}>
                </SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-10">
                <div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <img className="h-[200px] lg:h-[250px] w-full" src={recommends1} alt="Recommends" />
                        <div className="card-body text-center ">
                            <h2 className=" text-xl text-black font-semibold">Caeser Salad</h2>
                            <p className="text-black font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-gray-100 px-2 py-2 rounded text-[#BB8506] font-semibold border-b-2 border-[#BB8506] mb-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <img className="h-[200px] lg:h-[250px] w-full" src={recommends2} alt="Recommends" />
                        <div className="card-body text-center ">
                            <h2 className=" text-xl text-black font-semibold">Pizza</h2>
                            <p className="text-black font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="px-2 py-2 rounded text-[#BB8506] bg-[#1F2937] font-semibold border-b-2 border-[#BB8506] mb-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <img className="h-[200px] lg:h-[250px] w-full" src={recommends3} alt="Recommends" />
                        <div className="card-body text-center ">
                            <h2 className=" text-xl text-black font-semibold">Soup</h2>
                            <p className="text-black font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="bg-gray-100 px-2 py-2 rounded text-[#BB8506] font-semibold border-b-2 border-[#BB8506] mb-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChefRecommends;