import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useItems from "../../../Hooks/useItems";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";

const UpdateItem = () => {
    const {
        reset,
        register,
        handleSubmit,
    } = useForm()

    const [foodItemLoading, setFoodItemLoading] = useState(false)

    const navigate = useNavigate()

    const axiosPublic = useAxiosPublic()

    const { items, isPending } = useItems()
    const { id } = useParams()

    if (isPending) {
        return <div className="text-center flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    const onSubmit = async (data) => {
        setFoodItemLoading(true)
        axiosPublic.put(`/menus/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    reset()
                    setFoodItemLoading(false)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Item Updated successfully!!!",
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        navigate('/dashboard/manageItems')
                    })
                }
            })
    }

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

            <SectionTitle subHeading={"---What's new!---"} heading={"UPDATE ITEM"}></SectionTitle>

            <div className="bg-white border border-gray-900 p-2 md:p-5 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        items.map(item => item._id === id && <>
                            <div className="form-control w-full max-w-2xl">
                                <label className="label">
                                    <span className="label-text font-semibold ">Recipe name*</span>
                                </label>
                                <input defaultValue={item.name} {...register("name")} name="name" type="text" placeholder="Recipe name.." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-5 mt-3">

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold ">Category* </span>
                                    </label>

                                    <select
                                        defaultValue={item.category}
                                        {...register("category")}
                                        id="input"
                                        name="category"
                                        className="input text-sm input-bordered w-full max-w-xs focus:outline-0 "
                                    >
                                        <option value={''}>Select Option Item</option>
                                        <option value="salad" >Salad</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="soup">Soup</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drinks">Drinks</option>
                                    </select>

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold ">Price*</span>
                                    </label>
                                    <input defaultValue={item.price}{...register("price")} type="number" name="price" placeholder="Price..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                                </div>

                            </div>

                            <div className="mt-5">
                                <label className="label">
                                    <span className="label-text font-semibold ">Recipe Details*</span>
                                </label>
                                <textarea defaultValue={item.recipe} {...register("recipe")} name="recipe" id="" cols="20" rows="5" placeholder="Recipe Details..." className="input focus:outline-0 input-bordered w-full text-sm h-[100px]" ></textarea>
                            </div>


                            {/* <button className="font-semibold bg-[#B17E2F] text-white px-3 py-2 rounded mt-3">
                        <div className="flex gap-2 items-center">
                            Add Item
                            <ImSpoonKnife></ImSpoonKnife>
                        </div>
                    </ button> */}

                            {
                                foodItemLoading ?

                                    <button disabled className="px-8 py-2.5 flex items-center gap-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><span className="loading w-[15px] loading-spinner text-error"></span>Updating...</button>
                                    :
                                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Item</button>}

                        </>

                        )}
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;