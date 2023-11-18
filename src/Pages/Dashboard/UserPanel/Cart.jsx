import { ThreeDots } from "react-loader-spinner";
import useCarts from "../../../Hooks/useCarts";
import useInterceptors from "../../../Hooks/useInterceptors";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SingleCart from "./SingleCart";
import swal from "sweetalert";

const Cart = () => {

    const axiosInstance = useInterceptors()

    const { carts, isPending, refetch } = useCarts()

    const totalPrice = carts.reduce((total, item) => total + item.price, 0)

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

    const handleDeleteCarts = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosInstance.delete(`/carts/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The Cart has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

    }


    return (
        <div>
            <SectionTitle subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"}></SectionTitle>
            <div className="bg-white lg:px-16 lg:py-4">
                <div className=" bg-white flex flex-col md:flex-row justify-between">

                    <h2 className="text-xl md:text-2xl font-semibold">Total Orders: {carts.length}</h2>

                    <h2 className="text-xl md:text-2xl font-semibold">Total Price: {totalPrice}</h2>

                    <p className="bg-[#D1A054] px-3 py-2 ms:w-[50px] text-white rounded-md">Pay</p>

                </div>
                <hr className="my-4" />
                <div>
                    <div className="overflow-x-auto mt-5">
                        <table className="table w-full">
                            <thead className="text-sm font-bold bg-[#D1A054] text-white">
                                <tr>
                                    <th>
                                        SL
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts.map((cart, index) => <SingleCart key={cart._id} cart={cart} index={index} handleDeleteCarts={handleDeleteCarts}></SingleCart>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;