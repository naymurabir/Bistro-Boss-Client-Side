import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useInterceptors from "../../../Hooks/useInterceptors";
import useCarts from "../../../Hooks/useCarts";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const { user } = useAuth()
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    const axiosInstance = useInterceptors()
    const { carts, refetch } = useCarts()

    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')

    const totalPrice = carts.reduce((total, item) => total + parseInt(item.price), 0)

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const navigate = useNavigate()

    useEffect(() => {
        if (totalPrice)
            axiosInstance.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
    }, [axiosInstance, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log("Confirm error");
        } else {
            console.log("Payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction id:", paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // Save payment method into DB
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date().toLocaleDateString(undefined, options),
                    cartIds: carts.map(cart => cart._id),
                    menuItemIds: carts.map(cart => cart.menuId),
                    status: 'pending'
                }
                const res = await axiosInstance.post('/payments', payment)
                console.log("Payment Saved", res.data);
                refetch()
                if (res.data?.result?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your payment is done!',
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                    navigate('/dashboard/paymentHistory')
                }


            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: '15px',
                                color: '#424770',
                                '::placeholder': {

                                    backgroundColor: '#D1A054',
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: 'black',
                            },
                        },
                    }}
                />
                <button className="bg-[#D1A054] px-3 py-2 ms:w-[50px] text-white rounded-md w-1/2 mx-auto flex justify-center mt-5" type="submit" disabled={!stripe || !clientSecret} >
                    Payment
                </button>

                <p className="text-[#D1A054] text-center mt-3 font-semibold">{error}</p>
                {
                    transactionId && <p className="text-[#D1A054] text-center mt-3 font-semibold">Your Transaction Id: <span className="text-black">{transactionId}</span> </p>
                }
            </form>

        </div>
    );
};

export default CheckoutForm;