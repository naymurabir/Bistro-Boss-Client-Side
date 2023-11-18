import { AiOutlineDelete } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";


const AllUser = ({ user, index, handleDeleteUser, handleMakeAdmin }) => {

    const { name, email } = user

    return (
        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div>
                        <div className="text-sm ">{name}</div>
                    </div>
                </td>
                <td>
                    <h1 className='text-sm'>Email: {email} </h1>
                </td>

                <td>
                    {
                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className=' text-white py-2 px-2 bg-[#D1A054] text-xl rounded-sm font-semibold'> <FaUsers></FaUsers> </button>
                    }
                </td>

                <td>
                    <button onClick={() => handleDeleteUser(user)} className=' text-white py-2 px-2 bg-red-500 text-xl rounded-sm font-semibold'> <AiOutlineDelete></AiOutlineDelete> </button>
                </td>
            </tr>
        </>
    );
};

export default AllUser;