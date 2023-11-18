import { ThreeDots } from "react-loader-spinner";
import useUsers from "../../../Hooks/useUsers";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AllUser from "./AllUser";
import swal from "sweetalert";
import useInterceptors from "../../../Hooks/useInterceptors";

const AllUsers = () => {

    const axiosInstance = useInterceptors()

    const { users, isPending, refetch } = useUsers()

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

    const handleMakeAdmin = (user) => {
        axiosInstance.patch(`/users/admin/${user._id}`)
            .then(res => {
                refetch()
                if (res.data.modifiedCount > 0) {
                    swal("The user has been made to admin successfully.", {
                        icon: "success",
                    });
                }
            })
    }

    const handleDeleteUser = (user) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosInstance.delete(`/users/${user._id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The user has been deleted successfully.", {
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
            <div>
                <SectionTitle subHeading={"---How many??---"} heading={"MANAGE ALL USERS"}></SectionTitle>
                <div className="bg-white lg:px-16 lg:py-4">
                    <div className=" bg-white">

                        <h2 className="text-xl md:text-2xl font-semibold">Total Users: {users.length}</h2>

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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => <AllUser key={user._id} user={user} index={index} handleDeleteUser={handleDeleteUser} handleMakeAdmin={handleMakeAdmin}></AllUser>)
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

export default AllUsers;