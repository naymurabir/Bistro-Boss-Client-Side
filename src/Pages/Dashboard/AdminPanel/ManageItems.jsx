import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useInterceptors from "../../../Hooks/useInterceptors";
import ManageItem from "./ManageItem";
import swal from "sweetalert";
import useItems from "../../../Hooks/useItems";
import { ThreeDots } from "react-loader-spinner";

const ManageItems = () => {


    const axiosInstance = useInterceptors()

    const { items, isPending, refetch } = useItems()


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

    const handleDeleteItem = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosInstance.delete(`/menus/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The Item has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

    }


    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

            <SectionTitle subHeading={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"}></SectionTitle>

            <div>
                <div className="bg-white lg:px-2 lg:py-4">
                    <div className=" bg-white">

                        <h2 className="text-xl md:text-2xl font-semibold">Total Orders: {items.length}</h2>


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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map((item, index) => <ManageItem key={item._id} item={item} index={index} handleDeleteItem={handleDeleteItem}></ManageItem>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;