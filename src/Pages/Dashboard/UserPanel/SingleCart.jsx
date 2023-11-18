import { AiOutlineDelete } from "react-icons/ai";


const SingleCart = ({ cart, index, handleDeleteCarts }) => {

    const { _id, image, name, price } = cart

    return (

        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div className="avatar">
                        <div className="avatar w-[80px] h-[80px]  rounded-full">
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
                    <button onClick={() => handleDeleteCarts(_id)} className=' text-white py-2 px-2 bg-red-500 text-xl rounded-sm font-semibold'> <AiOutlineDelete></AiOutlineDelete> </button>
                </td>
            </tr>
        </>
    );
};

export default SingleCart;