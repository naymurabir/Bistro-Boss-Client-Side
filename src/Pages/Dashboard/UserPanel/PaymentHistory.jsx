import usePayments from "../../../Hooks/usePayments";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SinglePaymentHistory from "./SinglePaymentHistory";

const PaymentHistory = () => {

    const { payments } = usePayments()
    console.log(payments);

    return (

        <div>
            <SectionTitle subHeading={"---At a Glance---"} heading={"PAYMENT HISTORY"}></SectionTitle>
            <div className="bg-white lg:px-16 lg:py-4">
                <div className=" bg-white">

                    <h2 className="text-xl md:text-2xl font-semibold">Total Orders: {payments.length}</h2>

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
                                    <th>Email</th>
                                    <th>Price</th>
                                    {/* <th>Transaction Id</th> */}
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, index) => <SinglePaymentHistory key={payment._id} payment={payment} index={index} ></SinglePaymentHistory>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;