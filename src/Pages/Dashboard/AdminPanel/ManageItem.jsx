import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ManageItem = ({ item, index, handleDeleteItem }) => {
    const { _id, image, name, price } = item

    const navigate = useNavigate()

    return (
        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div className="avatar">
                        <div className="avatar w-[70px] h-[70px]  rounded-full">
                            <img src={image} />
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className="text-sm font-semibold">{name}</div>
                    </div>
                </td>
                <td>
                    <h1 className='text-base font-semibold'>Price: {price} </h1>
                </td>

                <td>
                    <button onClick={() => navigate(`/dashboard/updateItem/${_id}`)} className='text-white py-2 px-2 bg-[#D1A054] text-xl rounded-sm font-semibold'> <FaEdit></FaEdit> </button>
                </td>
                <td>
                    <button onClick={() => handleDeleteItem(_id)} className=' text-white py-2 px-2 bg-red-500 text-xl rounded-sm font-semibold'> <AiOutlineDelete></AiOutlineDelete> </button>
                </td>
            </tr>
        </>
    );
};

export default ManageItem;