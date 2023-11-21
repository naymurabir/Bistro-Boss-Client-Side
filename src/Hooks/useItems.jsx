import { useQuery } from "@tanstack/react-query";
import useInterceptors from "./useInterceptors";


const useItems = () => {
    const axiosInstance = useInterceptors()

    const { data: items = [], isPending, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const { data } = await axiosInstance.get("/menus")
            return data
        }
    })
    return { items, isPending, refetch }
};

export default useItems;