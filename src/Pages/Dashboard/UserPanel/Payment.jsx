import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)


const Payment = () => {
    return (
        <div className="bg-white md:p-10">

            <SectionTitle heading={"PAYMENT"}></SectionTitle>

            <div className="border border-gray-800 md:p-5">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;