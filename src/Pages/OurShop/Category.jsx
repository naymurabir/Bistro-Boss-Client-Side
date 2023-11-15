import Swal from "sweetalert2";
import useInterceptors from "../../Hooks/useInterceptors";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";

const Category = ({ item }) => {

    const { image, name, recipe, price, _id } = item

    const axiosInstance = useInterceptors()
    const { refetch } = useCarts()

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = async () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                price,
                recipe,
                image
            }

            const { data } = await axiosInstance.post('/carts', cartItem)
            if (data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${name} added to your cart Successfully`,
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                refetch()
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Please login first to make order.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                navigate(location?.state ? location?.state : '/login')
            }
        }
    }

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
                            <button onClick={handleAddToCart} className="bg-gray-100 px-2 py-2 rounded text-[#BB8506] font-semibold border-b-2 border-[#BB8506] mb-2 w-full hover:bg-slate-800 hover:text-[#BB8506]">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;