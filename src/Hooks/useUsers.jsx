import { useQuery } from "@tanstack/react-query";
import useInterceptors from "./useInterceptors";

const useUsers = () => {
    const axiosInstance = useInterceptors()


    const { data: users = [], isPending, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosInstance.get('/users')
            return data
        }
    })
    return { users, isPending, refetch }
};

export default useUsers;