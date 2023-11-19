import axios from "axios";
import { useEffect } from "react";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosPublic = () => {
    useEffect(() => {

        axiosPublic.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    }, [])

    return axiosPublic
};

export default useAxiosPublic;