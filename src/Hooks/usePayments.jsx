import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useInterceptors from "./useInterceptors";

const usePayments = () => {

    const axiosInstance = useInterceptors()
    const { user } = useAuth()

    const { data: payments = [], isPending, refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/payments?email=${user?.email}`)
            return data
        }
    })
    return { payments, isPending, refetch }

};

export default usePayments;