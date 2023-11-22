
const SinglePaymentHistory = ({ payment, index }) => {

    const { date, email, price, status } = payment

    return (
        <>
            <tr>
                <td className="text-sm font-semibold">
                    {index}
                </td>
                <td>
                    <div >
                        <div>
                            <h2>{email}</h2>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className="text-sm font-semibold">{price}</div>
                    </div>
                </td>
                {/* <td>
                    <h1 className='text-base font-semibold'> {transactionId} </h1>
                </td> */}
                <td>
                    <h1 className='text-sm font-semibold'> {date} </h1>
                </td>
                <td>
                    <h1 className='text-sm font-semibold'> {status} </h1>
                </td>


            </tr>
        </>
    );
};

export default SinglePaymentHistory;