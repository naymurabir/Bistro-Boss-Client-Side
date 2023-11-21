import { useForm } from "react-hook-form"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
// import useInterceptors from "../../../Hooks/useInterceptors";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItems = () => {

    const [foodItemLoading, setFoodItemLoading] = useState(false)

    const axiosPublic = useAxiosPublic()
    // const axiosInstance = useInterceptors()

    const {
        reset,
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        setFoodItemLoading(true)
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res?.data?.data?.display_url) {
            setFoodItemLoading(false)
            const foodItems = {
                name: data.name,
                recipe: data.recipe,
                image: res?.data?.data?.display_url,
                category: data.category,
                price: parseFloat(data?.price)
            }

            axiosPublic.post('/menus', foodItems)
                .then(res => {
                    if (res.data.insertedId) {
                        reset()
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Food has been added successfully",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                })
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 '>

            <div>
                <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"}></SectionTitle>
            </div>

            <div className="bg-white border border-gray-900 p-2 md:p-5 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold ">Recipe name*</span>
                        </label>
                        <input {...register("name")} name="name" type="text" placeholder="Recipe name.." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mt-3">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Category* </span>
                            </label>

                            <select
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
                            <input {...register("price")} type="number" name="price" placeholder="Price..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                    </div>

                    <div className="mt-5">
                        <label className="label">
                            <span className="label-text font-semibold ">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe")} name="recipe" id="" cols="20" rows="5" placeholder="Recipe Details..." className="input focus:outline-0 input-bordered w-full text-sm h-[100px]" ></textarea>
                    </div>

                    <div className="form-control w-full my-3">
                        <input {...register("image")} name="image" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    {/* <button className="font-semibold bg-[#B17E2F] text-white px-3 py-2 rounded mt-3">
                        <div className="flex gap-2 items-center">
                            Add Item
                            <ImSpoonKnife></ImSpoonKnife>
                        </div>
                    </ button> */}

                    {
                        foodItemLoading ?

                            <button disabled className="px-8 py-2.5 flex items-center gap-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><span className="loading w-[15px] loading-spinner text-error"></span>Waiting....</button>
                            :
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add item</button>}

                </form>
            </div>
        </div>
    );
};

export default AddItems;