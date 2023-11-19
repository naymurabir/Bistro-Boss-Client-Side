import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useInterceptors from "./useInterceptors";

const useAdmin = () => {

    const { user } = useAuth()

    const axiosInstance = useInterceptors()

    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data.admin
        }
    })
    return { isAdmin }
};

export default useAdmin;