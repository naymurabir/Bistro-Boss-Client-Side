import { useQuery } from "@tanstack/react-query";
import useInterceptors from "./useInterceptors";
import useAuth from "./useAuth";

const useCarts = () => {

    const axiosInstance = useInterceptors()

    const { user } = useAuth()

    const { data: carts = [], isPending, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/carts?email=${user?.email}`)
            return data
        }
    })
    return { carts, isPending, refetch }
};

export default useCarts;